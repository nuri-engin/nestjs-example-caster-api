import {ConsoleLogger, DynamicModule, Logger, Module} from '@nestjs/common'
import Redis from 'ioredis'

import {ProfilesModule} from '@caster/users/profiles/profiles.module'
import {Config} from '@caster/utils/config/config.types'

import {EventsGateway} from './events.gateway'
import {Publisher, Subscriber} from './event.types'
import {ChannelService} from './channel.service'

export interface EventsOptions {
  url?: string
}

@Module({
  imports: [ProfilesModule],
  providers: [
    {provide: Logger, useClass: ConsoleLogger},
    EventsGateway,
    ChannelService,
  ],
})
export class EventsModule {
  static forRoot(options: EventsOptions = {}): DynamicModule {
    return {
      module: EventsModule,
      providers: [
        {
          provide: Subscriber,
          useFactory: (config: Config) => {
            const url = options.url || config.get('redis.url')

            return new Redis(url)
          },
          inject: [Config],
        },
        {
          provide: Publisher,
          useFactory: (config: Config) => {
            const url = options.url || config.get('redis.url')

            return new Redis(url)
          },
          inject: [Config],
        },
      ],
    }
  }
}
