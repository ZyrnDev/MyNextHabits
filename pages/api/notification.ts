import webPush, { PushSubscription } from 'web-push';
import { NextApiRequest, NextApiResponse } from 'next'
import { promisify } from 'util';

webPush.setVapidDetails(
  `mailto:${process.env.WEB_PUSH_EMAIL}`,
  process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY ?? '',
  process.env.WEB_PUSH_PRIVATE_KEY ?? ''
)

const notifcation = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == 'POST') {
    const { subscription } = req.body as { subscription: PushSubscription }
    ForwardNotification(res, subscription, {title: 'Direct Response Web Push', message: 'Your web push notification is here!'})
    const sleep = promisify(setTimeout)

    for (let i = 0; i < 10; i++) {
      await sleep(2000)
      SendNotification(subscription, {title: 'Indirect Response Web Push', message: 'Your web push notification is here!'})
    }    
    
  } else {
    res.statusCode = 405
    res.end()
  }
}

const SendNotification = (subscription: PushSubscription, payload: any) => {
    return webPush.sendNotification(subscription, JSON.stringify(payload))
}

const ForwardNotification = (res: NextApiResponse, subscription: PushSubscription, payload: any) => {
  SendNotification(subscription, payload)
    .then(response => {
      res.writeHead(response.statusCode, response.headers).end(response.body)
    })
    .catch(err => {
      if ('statusCode' in err) {
        res.writeHead(err.statusCode, err.headers).end(err.body)
      } else {
        console.error(err)
        res.statusCode = 500
        res.end()
      }
    })
};
      

export default notifcation;