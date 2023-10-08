import { Request, Response, Router } from 'express';
//import mongoose from 'mongoose';
//import express from 'express';
//import ActivityModel from '../models/activitySchema.js';

//const router = express.Router();
//const router = Router();

//const query = "mongodb+srv://iamcharlesb:YHdqZx7CQ774S4A@cluster0.axlxrmm.mongodb.net/?retryWrites=true&w=majority";
//const db = (query);
//mongoose.Promise = global.Promise;

//import { OAuth2Client } from 'google-auth-library';
//const client = new OAuth2Client('848399011037-3dh21a0l63ht26vcvb2ahjvo4hqsudrk.apps.googleusercontent.com');

/*mongoose.connect(db, {
	dbName: "magicvisor",
	useNewUrlParser: true,
	useUnifiedTopology: true
}, function (error) {
	if (error) {
		console.log("Error!" + error);
	}
});*/

const sessionRouter = Router();

interface GCPProfile { 
  name: string;
  email: string;
  picture: string;
}

sessionRouter.post('/token', async function (req: Request, res: Response) {

	const { token } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: '848399011037-3dh21a0l63ht26vcvb2ahjvo4hqsudrk.apps.googleusercontent.com'
  }).then((response) => {
    const email = response.getPayload()?.email
    const name = response.getPayload()?.name;
    const picture = response.getPayload()?.picture;

    let objToken = {
      name,
      emailId: email,
      picture,
      createdDate: new Date()
    }

	  const tokenId = btoa(JSON.stringify(objToken));

	  console.log('I tokenId - ', tokenId);

    res.setHeader('set-cookie', ['Foo=Bar', 'Tree=Apple', 'mid=' + tokenId + ';Path=/;Max-Age=86400*1000;Secure=false;SameSite=None;']);
    
    res.status(200).json([]);

  })

	/*const { name, email, picture } = ticket.getPayload() as GCPProfile;

	let objToken = {
		name,
		emailId: email,
		picture,
		createdDate: new Date()
	}

	const tokenId = btoa(JSON.stringify(objToken));

	console.log('I tokenId - ', tokenId);

	res.setHeader('set-cookie', ['Foo=Bar','Tree=Apple','mid=' + tokenId + ';Path=/;Max-Age=86400*1000;Secure=false;SameSite=None;']);

	/*const newActivity = new ActivityModel({ ...objToken, ...{ tokenId } });

	console.log('I newActivity - ', newActivity);

	newActivity.save(function (err, data) {
		if (err) {
			console.log(err);
			res.send("Error!");
		} else {
			//res.send("Success");
			console.log('Success----------------------');
			console.log('II tokenId - ', tokenId);
			//res.cookie("mid", tokenId);
			res.json({
				name,
				emailId: email,
				picture,
				tokenId
			});
		}
	});*/

});


sessionRouter.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).json([]);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

sessionRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

sessionRouter.post('/', async (req: Request, res: Response) => {
  try {
    res.status(201).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

sessionRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

sessionRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default sessionRouter;

