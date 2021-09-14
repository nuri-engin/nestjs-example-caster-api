/* eslint-disable @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any */
// WARNING: This file is automatically generated. Do not edit.
import {Prisma} from '@prisma/client'
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
export type Maybe<T> = T | null
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]?: Maybe<T[SubKey]>}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]: Maybe<T[SubKey]>}
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  {[P in K]-?: NonNullable<T[P]>}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: Date
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Prisma.JsonValue
}

export type CreateEpisodeInput = {
  title: Scalars['String']
  summary?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
  showId: Scalars['String']
}

export type CreateProfileInput = {
  email: Scalars['String']
  displayName?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
  userId: Scalars['String']
}

export type CreateShowInput = {
  title: Scalars['String']
  summary?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
}

export type CreateUserInput = {
  username: Scalars['String']
  profile?: Maybe<CreateUserProfileInput>
}

export type CreateUserProfileInput = {
  email: Scalars['String']
  displayName?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
}

export type Episode = {
  __typename?: 'Episode'
  id: Scalars['ID']
  title: Scalars['String']
  summary?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
  showId?: Maybe<Scalars['String']>
  show?: Maybe<Show>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type EpisodeCondition = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  summary?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
  showId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum EpisodesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
}

export type EpisodesPage = {
  __typename?: 'EpisodesPage'
  data: Array<Episode>
  count: Scalars['Int']
  total: Scalars['Int']
  page: Scalars['Int']
  pageCount: Scalars['Int']
}

export type MutateEpisodeResult = {
  __typename?: 'MutateEpisodeResult'
  episode?: Maybe<Episode>
}

export type MutateProfileResult = {
  __typename?: 'MutateProfileResult'
  profile?: Maybe<Profile>
}

export type MutateShowResult = {
  __typename?: 'MutateShowResult'
  show?: Maybe<Show>
}

export type MutateUserResult = {
  __typename?: 'MutateUserResult'
  user?: Maybe<User>
}

export type Mutation = {
  __typename?: 'Mutation'
  getOrCreateCurrentUser: MutateUserResult
  updateCurrentUser: MutateUserResult
  createProfile: MutateProfileResult
  updateProfile: MutateProfileResult
  deleteProfile: Scalars['Boolean']
  createShow: MutateShowResult
  updateShow: MutateShowResult
  deleteShow: Scalars['Boolean']
  createEpisode: MutateEpisodeResult
  updateEpisode: MutateEpisodeResult
  deleteEpisode: Scalars['Boolean']
}

export type MutationGetOrCreateCurrentUserArgs = {
  input: CreateUserInput
}

export type MutationUpdateCurrentUserArgs = {
  input: UpdateUserInput
}

export type MutationCreateProfileArgs = {
  input: CreateProfileInput
}

export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput
  id: Scalars['ID']
}

export type MutationDeleteProfileArgs = {
  id: Scalars['ID']
}

export type MutationCreateShowArgs = {
  input: CreateShowInput
}

export type MutationUpdateShowArgs = {
  input: UpdateShowInput
  id: Scalars['ID']
}

export type MutationDeleteShowArgs = {
  id: Scalars['ID']
}

export type MutationCreateEpisodeArgs = {
  input: CreateEpisodeInput
}

export type MutationUpdateEpisodeArgs = {
  input: UpdateEpisodeInput
  id: Scalars['ID']
}

export type MutationDeleteEpisodeArgs = {
  id: Scalars['ID']
}

export type Profile = {
  __typename?: 'Profile'
  id: Scalars['ID']
  email?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
  city?: Maybe<Scalars['String']>
  stateProvince?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
  user?: Maybe<User>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type ProfileCondition = {
  id?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
  userId?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum ProfilesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  DisplayNameAsc = 'DISPLAY_NAME_ASC',
  DisplayNameDesc = 'DISPLAY_NAME_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
}

export type ProfilesPage = {
  __typename?: 'ProfilesPage'
  data: Array<Profile>
  count: Scalars['Int']
  total: Scalars['Int']
  page: Scalars['Int']
  pageCount: Scalars['Int']
}

export type Query = {
  __typename?: 'Query'
  getCurrentUser?: Maybe<User>
  getProfile?: Maybe<Profile>
  getManyProfiles: ProfilesPage
  getShow?: Maybe<Show>
  getManyShows: ShowsPage
  getEpisode?: Maybe<Episode>
  getManyEpisodes: EpisodesPage
}

export type QueryGetProfileArgs = {
  id: Scalars['ID']
}

export type QueryGetManyProfilesArgs = {
  page?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<ProfilesOrderBy>>
  where?: Maybe<ProfileCondition>
}

export type QueryGetShowArgs = {
  id: Scalars['ID']
}

export type QueryGetManyShowsArgs = {
  page?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<ShowsOrderBy>>
  where?: Maybe<ShowCondition>
}

export type QueryGetEpisodeArgs = {
  id: Scalars['ID']
}

export type QueryGetManyEpisodesArgs = {
  page?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<EpisodesOrderBy>>
  where?: Maybe<EpisodeCondition>
}

export type Show = {
  __typename?: 'Show'
  id: Scalars['ID']
  title: Scalars['String']
  summary?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type ShowCondition = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  summary?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum ShowsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
}

export type ShowsPage = {
  __typename?: 'ShowsPage'
  data: Array<Show>
  count: Scalars['Int']
  total: Scalars['Int']
  page: Scalars['Int']
  pageCount: Scalars['Int']
}

export type UpdateEpisodeInput = {
  title?: Maybe<Scalars['String']>
  summary?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
  showId?: Maybe<Scalars['String']>
}

export type UpdateProfileInput = {
  email?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
  userId?: Maybe<Scalars['String']>
}

export type UpdateShowInput = {
  title?: Maybe<Scalars['String']>
  summary?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSON']>
}

export type UpdateUserInput = {
  username?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  username: Scalars['String']
  isActive: Scalars['Boolean']
  profileId?: Maybe<Scalars['String']>
  profile?: Maybe<Profile>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    {[key in TKey]: TResult},
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    {[key in TKey]: TResult},
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  CreateEpisodeInput: CreateEpisodeInput
  String: ResolverTypeWrapper<Scalars['String']>
  CreateProfileInput: CreateProfileInput
  CreateShowInput: CreateShowInput
  CreateUserInput: CreateUserInput
  CreateUserProfileInput: CreateUserProfileInput
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  Episode: ResolverTypeWrapper<Episode>
  ID: ResolverTypeWrapper<Scalars['ID']>
  EpisodeCondition: EpisodeCondition
  EpisodesOrderBy: EpisodesOrderBy
  EpisodesPage: ResolverTypeWrapper<EpisodesPage>
  Int: ResolverTypeWrapper<Scalars['Int']>
  JSON: ResolverTypeWrapper<Scalars['JSON']>
  MutateEpisodeResult: ResolverTypeWrapper<MutateEpisodeResult>
  MutateProfileResult: ResolverTypeWrapper<MutateProfileResult>
  MutateShowResult: ResolverTypeWrapper<MutateShowResult>
  MutateUserResult: ResolverTypeWrapper<MutateUserResult>
  Mutation: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Profile: ResolverTypeWrapper<Profile>
  ProfileCondition: ProfileCondition
  ProfilesOrderBy: ProfilesOrderBy
  ProfilesPage: ResolverTypeWrapper<ProfilesPage>
  Query: ResolverTypeWrapper<{}>
  Show: ResolverTypeWrapper<Show>
  ShowCondition: ShowCondition
  ShowsOrderBy: ShowsOrderBy
  ShowsPage: ResolverTypeWrapper<ShowsPage>
  UpdateEpisodeInput: UpdateEpisodeInput
  UpdateProfileInput: UpdateProfileInput
  UpdateShowInput: UpdateShowInput
  UpdateUserInput: UpdateUserInput
  User: ResolverTypeWrapper<User>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  CreateEpisodeInput: CreateEpisodeInput
  String: Scalars['String']
  CreateProfileInput: CreateProfileInput
  CreateShowInput: CreateShowInput
  CreateUserInput: CreateUserInput
  CreateUserProfileInput: CreateUserProfileInput
  DateTime: Scalars['DateTime']
  Episode: Episode
  ID: Scalars['ID']
  EpisodeCondition: EpisodeCondition
  EpisodesPage: EpisodesPage
  Int: Scalars['Int']
  JSON: Scalars['JSON']
  MutateEpisodeResult: MutateEpisodeResult
  MutateProfileResult: MutateProfileResult
  MutateShowResult: MutateShowResult
  MutateUserResult: MutateUserResult
  Mutation: {}
  Boolean: Scalars['Boolean']
  Profile: Profile
  ProfileCondition: ProfileCondition
  ProfilesPage: ProfilesPage
  Query: {}
  Show: Show
  ShowCondition: ShowCondition
  ShowsPage: ShowsPage
  UpdateEpisodeInput: UpdateEpisodeInput
  UpdateProfileInput: UpdateProfileInput
  UpdateShowInput: UpdateShowInput
  UpdateUserInput: UpdateUserInput
  User: User
}>

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type EpisodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Episode'] = ResolversParentTypes['Episode']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  content?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  showId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  show?: Resolver<Maybe<ResolversTypes['Show']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type EpisodesPageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EpisodesPage'] = ResolversParentTypes['EpisodesPage']
> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['Episode']>, ParentType, ContextType>
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type MutateEpisodeResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MutateEpisodeResult'] = ResolversParentTypes['MutateEpisodeResult']
> = ResolversObject<{
  episode?: Resolver<Maybe<ResolversTypes['Episode']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MutateProfileResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MutateProfileResult'] = ResolversParentTypes['MutateProfileResult']
> = ResolversObject<{
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MutateShowResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MutateShowResult'] = ResolversParentTypes['MutateShowResult']
> = ResolversObject<{
  show?: Resolver<Maybe<ResolversTypes['Show']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MutateUserResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MutateUserResult'] = ResolversParentTypes['MutateUserResult']
> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  getOrCreateCurrentUser?: Resolver<
    ResolversTypes['MutateUserResult'],
    ParentType,
    ContextType,
    RequireFields<MutationGetOrCreateCurrentUserArgs, 'input'>
  >
  updateCurrentUser?: Resolver<
    ResolversTypes['MutateUserResult'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCurrentUserArgs, 'input'>
  >
  createProfile?: Resolver<
    ResolversTypes['MutateProfileResult'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProfileArgs, 'input'>
  >
  updateProfile?: Resolver<
    ResolversTypes['MutateProfileResult'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProfileArgs, 'input' | 'id'>
  >
  deleteProfile?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProfileArgs, 'id'>
  >
  createShow?: Resolver<
    ResolversTypes['MutateShowResult'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateShowArgs, 'input'>
  >
  updateShow?: Resolver<
    ResolversTypes['MutateShowResult'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateShowArgs, 'input' | 'id'>
  >
  deleteShow?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteShowArgs, 'id'>
  >
  createEpisode?: Resolver<
    ResolversTypes['MutateEpisodeResult'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateEpisodeArgs, 'input'>
  >
  updateEpisode?: Resolver<
    ResolversTypes['MutateEpisodeResult'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateEpisodeArgs, 'input' | 'id'>
  >
  deleteEpisode?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteEpisodeArgs, 'id'>
  >
}>

export type ProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  displayName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  content?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  stateProvince?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProfilesPageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProfilesPage'] = ResolversParentTypes['ProfilesPage']
> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['Profile']>, ParentType, ContextType>
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  getCurrentUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType
  >
  getProfile?: Resolver<
    Maybe<ResolversTypes['Profile']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetProfileArgs, 'id'>
  >
  getManyProfiles?: Resolver<
    ResolversTypes['ProfilesPage'],
    ParentType,
    ContextType,
    RequireFields<QueryGetManyProfilesArgs, never>
  >
  getShow?: Resolver<
    Maybe<ResolversTypes['Show']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetShowArgs, 'id'>
  >
  getManyShows?: Resolver<
    ResolversTypes['ShowsPage'],
    ParentType,
    ContextType,
    RequireFields<QueryGetManyShowsArgs, never>
  >
  getEpisode?: Resolver<
    Maybe<ResolversTypes['Episode']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetEpisodeArgs, 'id'>
  >
  getManyEpisodes?: Resolver<
    ResolversTypes['EpisodesPage'],
    ParentType,
    ContextType,
    RequireFields<QueryGetManyEpisodesArgs, never>
  >
}>

export type ShowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Show'] = ResolversParentTypes['Show']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  content?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ShowsPageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ShowsPage'] = ResolversParentTypes['ShowsPage']
> = ResolversObject<{
  data?: Resolver<Array<ResolversTypes['Show']>, ParentType, ContextType>
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  profileId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
  DateTime?: GraphQLScalarType
  Episode?: EpisodeResolvers<ContextType>
  EpisodesPage?: EpisodesPageResolvers<ContextType>
  JSON?: GraphQLScalarType
  MutateEpisodeResult?: MutateEpisodeResultResolvers<ContextType>
  MutateProfileResult?: MutateProfileResultResolvers<ContextType>
  MutateShowResult?: MutateShowResultResolvers<ContextType>
  MutateUserResult?: MutateUserResultResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Profile?: ProfileResolvers<ContextType>
  ProfilesPage?: ProfilesPageResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Show?: ShowResolvers<ContextType>
  ShowsPage?: ShowsPageResolvers<ContextType>
  User?: UserResolvers<ContextType>
}>
