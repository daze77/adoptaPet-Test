const orm = require('./db/orm.mongoose')
const sessionManager = require('./session-manager')
var petfinder = require('@petfinder/petfinder-js');
var client = new petfinder.Client({ apiKey: process.env.apiKey, secret: process.env.apiSecret })
const fetch = require("node-fetch")


// session checking middleware
async function authRequired(req, res, next) {
   // check session set, and it's valid
   const sessionData = sessionManager.verifyAndLoad(req.headers.session)
   if (!sessionData) {
      console.log(`[${req.method} ${req.url}] .. [authRequired] invalid session, refusing (403)`)
      res.status(403).send({ status: false, message: 'Requires valid session. Please login again.' })
      return
   }
   console.log(`[${req.method} ${req.url}] .. [authRequired] session GOOD`)
   // session was good, pass info on, let's continue endpoint processing...
   req.sessionData = sessionData
   next()
}

function router(app) {
   app.post('/api/users/register', async function (req, res) {
      console.log('[POST /api/users/register] request body:', req.body)
      const { status, userData, message } = await orm.userRegister(req.body)
      if (!status) {
         res.status(403).send({ status, message }); return
      }

      // generate a session-key
      const session = sessionManager.create(userData.id)
      console.log(`.. registration complete! session: ${session}`)

      res.send({ status, session, userData, message })
   })

   app.post('/api/users/login', async function (req, res) {
      console.log('[POST /api/users/login] req.body:', req.body)
      const { status, userData, message } = await orm.userLogin(req.body.email, req.body.password)
      if (!status) {
         res.status(403).send({ status, message }); return
      }

      // generate a session-key
      const session = sessionManager.create(userData.id)
      console.log( `.. login complete! session: ${session}` )
      res.send({ status, session, userData, message })
   })

   // all these endpoints require VALID session info
   app.get('/api/users/session', authRequired, async function (req, res) {
      const { status, userData, message } = await orm.userSession(req.sessionData.userId)
      if (!status) {
         res.status(403).send({ status, message }); return
      }

      console.log('.. session was ok, resending data')
      res.send({ status, session, userData, message })
   })

   app.get('/api/users/logout', authRequired, async function (req, res) {
      sessionManager.remove(req.header.session)
      console.log(` .. removed session ${req.header.session}`)
      res.send({ status: true, message: 'Logout complete' })
   })

   app.get('/api/tasks', authRequired, async function (req, res) {
      const { status, tasks, message } = await orm.taskList(req.sessionData.userId)
      console.log(` .. got ${tasks.length} tasks for ownerId(${req.sessionData.userId})`)
      res.send({ status, tasks, message })
   })

   app.post('/api/tasks', authRequired, async function (req, res) {
      const newTask = req.body.task
      const { status, tasks, message } = await orm.taskSaveAndList(newTask, req.sessionData.userId)
      console.log(` .. updated with '${newTask}' for ownerId(${req.sessionData.userId})`)
      res.send({ status, tasks, message })
   })

   app.get('/api/messages', authRequired, async function (req, res) {
      const { status, messageList } = await orm.messageList(req.sessionData.userId)
      console.log(` .. got ${messageList.length} message for ownerId(${req.sessionData.userId})`)
      res.send({ status, messageList })
   })

   app.post('/api/messages', authRequired, async function (req, res) {
      const newMessage = req.body.message
      const newSubject = req.body.subject
      const newName = req.body.name
      console.log('newMessage', newMessage)
      const { status, messages } = await orm.messageSaveAndList(newMessage, newSubject, newName, req.sessionData.userId)
      console.log(` .. updated with '${newMessage}' for ownerId(${req.sessionData.userId})`)
      res.send({ status, messages })
   })

   app.post('/api/messagereply', authRequired, async function (req, res) {
      console.log(req.body)
      const newMessage = req.body.replyMessage
      const newSubject = req.body.replySubject
      const newName = req.body.replyName
      const id = req.body.id
      console.log('newMessage', newMessage)
      const { status, messages } = await orm.messageReplySaveAndList(newMessage, newSubject, newName, id, req.sessionData.userId)
      console.log(` .. updated with '${newMessage}' for ownerId(${req.sessionData.userId})`)
      res.send({ status, messages })
   })

   app.get('/api/reviews', authRequired, async function (req, res) {
      const { status, reviewList } = await orm.reviewList(req.sessionData.userId)
      console.log(` .. got ${reviewList.length} message for ownerId(${req.sessionData.userId})`)
      res.send({ status, reviewList })
   })

   app.post('/api/reviews', authRequired, async function (req, res) {
      const newReview = req.body.review
      const newSubject = req.body.subject
      const newOrganization = req.body.organization
      const newName = req.body.name
      console.log('newReview', newReview)
      const { status, reviews } = await orm.reviewSaveAndList(newReview, newSubject, newOrganization, newName, req.sessionData.userId)
      console.log(` .. updated with '${newReview}' for ownerId(${req.sessionData.userId})`)
      res.send({ status, reviews })
   })

   app.post('/api/users/requisition', async function (req, res) {
      console.log('[POST /api/users/requisition] request body:', req.body)
      const { status, saveRequisitionData, message } = await orm.requisitionInformation(req.body)
      if (!status) {
         res.status(403).send({ status, message }); return
      }

      // generate a session-key
      const session = sessionManager.create(saveRequisitionData.id)
      console.log(`.. registration complete! session: ${session}`)

      res.send({ status, session, saveRequisitionData, message })
   })

   app.get('/api/pets', (req, res) => {
      //The function that gets the pets object
      async function showAnimals(animalType, searchBreed) {
         let page = 1;
         // The result is stored in apiResult
         let apiResult = await client.animal.search({
            type: animalType,
            breed: searchBreed,
            page,
            limit: 50,
         });

         console.log(apiResult.data)
         res.send(apiResult.data.animals)
         return apiResult.data
      }
      // console.log(req.headers.type, req.headers.breed)


      showAnimals(req.headers.type, req.headers.breed)

      console.log('FETCHED!!')



   })

// retreiving the sherter information and pasing to front end
   app.get('/api/getShelterInfo', async function (req, res){
      const results = await fetch('https://api.yelp.com/v3/businesses/search?location=Toronto&term=%22pet%20shelter%22&radius=40000&sort_by=best_match&limit=50', {
         headers: {
             Accept: 'application/json',
             Authorization: process.env.bearer         
             }

         }
      )
      .then(r => r.json())
      // .then(r => console.log('this is the r from router', r.businesses[0]))
      .catch(err => console.error(err))


      
      // console.log('this is process.env', process.env.bearer)
      // console.log('this is fetch', req)

      // console.log('yo router did we get any results', results)

      // let shelterData = [ ]

      // results.businesses.map(shelter => {
      //    shelterData.push({
      //       id: shelter.id,
      //       name: shelter.name,
      //       address: shelter.location.display_address.join(","),
      //       url: shelter.url,
      //       image: shelter.image_url,
      //       latitude: shelter.coordinates.latitude,
      //       longitude: shelter.coordinates.longitude,
      //       process: process.env.bearer
      //    })
      // })


      // console.log('did shelter data work', shelterData)

      // res.json(results)

      res.json(results.businesses.map(shelter =>{
               return{
               id: shelter.id,
               name: shelter.name,
               address: shelter.location.display_address.join(","),
               url: shelter.url,
               image: shelter.image_url,
               latitude: shelter.coordinates.latitude,
               longitude: shelter.coordinates.longitude,
               process: process.env.bearer
               }

      }
      
      ))
   }
      
   )



// retreiving the vet information and pasing to front end

   app.get('/api/getVetInfo', async function (req, res){
      const results = await fetch('https://api.yelp.com/v3/businesses/search?location=Toronto&term=vets&radius=40000&sort_by=best_match&limit=50', {
         method: 'GET',
         headers: {
             Accept: 'application/json',
             Authorization: `${process.env.bearer}`         
             }

         }
      ).then(e => e.json())


          console.log('this is results', results.businesses)


      res.json(results.businesses.map(vet =>{
               return{
                  id: vet.id,
                  name: vet.name,
                  address: vet.location.display_address.join(","),
                  url: vet.url,
                  image: vet.image_url,
                  latitude: vet.coordinates.latitude,
                  longitude: vet.coordinates.longitude
               }

      }))
   }
      
   )









}
















module.exports = router