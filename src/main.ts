import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './application.module'

declare const module: any

async function bootstrap() {

  const app = await NestFactory.create(ApplicationModule,)

  const port = parseInt(process.env.PORT) || 3000
  const host = process.env.HOST || '127.0.0.1'

  await app.listen(port, host)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
