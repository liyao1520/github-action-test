import 'dotenv/config'

console.log(process.env.TENCENTCLOUD_SECRET_ID?.length ?? '没有env')