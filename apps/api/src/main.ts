import bodyParser from 'body-parser'
import chalk from 'chalk'
import repeat from 'lodash/repeat'
import {INestApplication, ValidationPipe, Logger} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'

import {PrismaService} from '@caster/utils'

import {AppModule} from './app.module'

const APP_NAME = 'Caster'

export async function init(): Promise<INestApplication> {
  const {NODE_ENV} = process.env

  const app = await NestFactory.create(AppModule)

  const environment = NODE_ENV || 'production'
  const isDev = environment === 'development'

  app.use(bodyParser.json({limit: '50mb'}))
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe({disableErrorMessages: !isDev}))

  const prismaService: PrismaService = app.get(PrismaService)
  prismaService.enableShutdownHooks(app)

  return app
}

async function bootstrap(): Promise<void> {
  const {PORT} = process.env

  const app = await init()

  const port = PORT || '3000'

  app.startAllMicroservices()

  await app.listen(Number(port), () => {
    const padding = APP_NAME.length < 9 ? 0 : APP_NAME.length - 9

    Logger.log(
      chalk.cyan(
        `> Started ${chalk.blue(APP_NAME)} at:  ${chalk.green(
          `http://localhost:${chalk.yellow(port)}`
        )}`
      )
    )

    Logger.log(
      chalk.cyan(
        `> ${chalk.blue('GraphQL')} available at:  ${repeat(
          ' ',
          padding
        )}${chalk.green(`http://localhost:${chalk.yellow(port)}/graphql`)}`
      )
    )
  })
}

bootstrap()
