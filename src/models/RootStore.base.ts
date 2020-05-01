/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { BlogModel, BlogModelType } from "./BlogModel"
import { blogModelPrimitives, BlogModelSelector } from "./BlogModel.base"
import { ModelPostConnectionModel, ModelPostConnectionModelType } from "./ModelPostConnectionModel"
import { modelPostConnectionModelPrimitives, ModelPostConnectionModelSelector } from "./ModelPostConnectionModel.base"
import { PostModel, PostModelType } from "./PostModel"
import { postModelPrimitives, PostModelSelector } from "./PostModel.base"
import { ModelCommentConnectionModel, ModelCommentConnectionModelType } from "./ModelCommentConnectionModel"
import { modelCommentConnectionModelPrimitives, ModelCommentConnectionModelSelector } from "./ModelCommentConnectionModel.base"
import { CommentModel, CommentModelType } from "./CommentModel"
import { commentModelPrimitives, CommentModelSelector } from "./CommentModel.base"
import { ModelBlogConnectionModel, ModelBlogConnectionModelType } from "./ModelBlogConnectionModel"
import { modelBlogConnectionModelPrimitives, ModelBlogConnectionModelSelector } from "./ModelBlogConnectionModel.base"

import { ModelAttributeTypes } from "./ModelAttributeTypesEnum"
import { ModelSortDirection } from "./ModelSortDirectionEnum"

export type ModelStringKeyConditionInput = {
  eq?: string
  le?: string
  lt?: string
  ge?: string
  gt?: string
  between?: string[]
  beginsWith?: string
}
export type ModelCommentFilterInput = {
  id?: ModelIdInput
  postID?: ModelIdInput
  content?: ModelStringInput
  and?: ModelCommentFilterInput[]
  or?: ModelCommentFilterInput[]
  not?: ModelCommentFilterInput
}
export type ModelIdInput = {
  ne?: string
  eq?: string
  le?: string
  lt?: string
  ge?: string
  gt?: string
  contains?: string
  notContains?: string
  between?: string[]
  beginsWith?: string
  attributeExists?: boolean
  attributeType?: ModelAttributeTypes
  size?: ModelSizeInput
}
export type ModelSizeInput = {
  ne?: number
  eq?: number
  le?: number
  lt?: number
  ge?: number
  gt?: number
  between?: number[]
}
export type ModelStringInput = {
  ne?: string
  eq?: string
  le?: string
  lt?: string
  ge?: string
  gt?: string
  contains?: string
  notContains?: string
  between?: string[]
  beginsWith?: string
  attributeExists?: boolean
  attributeType?: ModelAttributeTypes
  size?: ModelSizeInput
}
export type ModelPostFilterInput = {
  id?: ModelIdInput
  title?: ModelStringInput
  blogID?: ModelIdInput
  and?: ModelPostFilterInput[]
  or?: ModelPostFilterInput[]
  not?: ModelPostFilterInput
}
export type ModelBlogFilterInput = {
  id?: ModelIdInput
  name?: ModelStringInput
  and?: ModelBlogFilterInput[]
  or?: ModelBlogFilterInput[]
  not?: ModelBlogFilterInput
}
export type CreateBlogInput = {
  id?: string
  name: string
}
export type ModelBlogConditionInput = {
  name?: ModelStringInput
  and?: ModelBlogConditionInput[]
  or?: ModelBlogConditionInput[]
  not?: ModelBlogConditionInput
}
export type UpdateBlogInput = {
  id: string
  name?: string
}
export type DeleteBlogInput = {
  id?: string
}
export type CreatePostInput = {
  id?: string
  title: string
  blogID: string
}
export type ModelPostConditionInput = {
  title?: ModelStringInput
  blogID?: ModelIdInput
  and?: ModelPostConditionInput[]
  or?: ModelPostConditionInput[]
  not?: ModelPostConditionInput
}
export type UpdatePostInput = {
  id: string
  title?: string
  blogID?: string
}
export type DeletePostInput = {
  id?: string
}
export type CreateCommentInput = {
  id?: string
  postID: string
  content: string
}
export type ModelCommentConditionInput = {
  postID?: ModelIdInput
  content?: ModelStringInput
  and?: ModelCommentConditionInput[]
  or?: ModelCommentConditionInput[]
  not?: ModelCommentConditionInput
}
export type UpdateCommentInput = {
  id: string
  postID?: string
  content?: string
}
export type DeleteCommentInput = {
  id?: string
}
export type ModelIntInput = {
  ne?: number
  eq?: number
  le?: number
  lt?: number
  ge?: number
  gt?: number
  between?: number[]
  attributeExists?: boolean
  attributeType?: ModelAttributeTypes
}
export type ModelFloatInput = {
  ne?: number
  eq?: number
  le?: number
  lt?: number
  ge?: number
  gt?: number
  between?: number[]
  attributeExists?: boolean
  attributeType?: ModelAttributeTypes
}
export type ModelBooleanInput = {
  ne?: boolean
  eq?: boolean
  attributeExists?: boolean
  attributeType?: ModelAttributeTypes
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  blogs: ObservableMap<string, BlogModelType>,
  posts: ObservableMap<string, PostModelType>,
  comments: ObservableMap<string, CommentModelType>
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Blog', () => BlogModel], ['ModelPostConnection', () => ModelPostConnectionModel], ['Post', () => PostModel], ['ModelCommentConnection', () => ModelCommentConnectionModel], ['Comment', () => CommentModel], ['ModelBlogConnection', () => ModelBlogConnectionModel]], ['Blog', 'Post', 'Comment'], "js"))
  .props({
    blogs: types.optional(types.map(types.late((): any => BlogModel)), {}),
    posts: types.optional(types.map(types.late((): any => PostModel)), {}),
    comments: types.optional(types.map(types.late((): any => CommentModel)), {})
  })
  .actions(self => ({
    queryGetBlog(variables: { id: string }, resultSelector: string | ((qb: BlogModelSelector) => BlogModelSelector) = blogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getBlog: BlogModelType}>(`query getBlog($id: ID!) { getBlog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new BlogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryListBlogs(variables: { filter?: ModelBlogFilterInput, limit?: number, nextToken?: string }, resultSelector: string | ((qb: ModelBlogConnectionModelSelector) => ModelBlogConnectionModelSelector) = modelBlogConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ listBlogs: ModelBlogConnectionModelType}>(`query listBlogs($filter: ModelBlogFilterInput, $limit: Int, $nextToken: String) { listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
        ${typeof resultSelector === "function" ? resultSelector(new ModelBlogConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetPost(variables: { id: string }, resultSelector: string | ((qb: PostModelSelector) => PostModelSelector) = postModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getPost: PostModelType}>(`query getPost($id: ID!) { getPost(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PostModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryListPosts(variables: { filter?: ModelPostFilterInput, limit?: number, nextToken?: string }, resultSelector: string | ((qb: ModelPostConnectionModelSelector) => ModelPostConnectionModelSelector) = modelPostConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ listPosts: ModelPostConnectionModelType}>(`query listPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) { listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
        ${typeof resultSelector === "function" ? resultSelector(new ModelPostConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetComment(variables: { id: string }, resultSelector: string | ((qb: CommentModelSelector) => CommentModelSelector) = commentModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getComment: CommentModelType}>(`query getComment($id: ID!) { getComment(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CommentModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryListComments(variables: { filter?: ModelCommentFilterInput, limit?: number, nextToken?: string }, resultSelector: string | ((qb: ModelCommentConnectionModelSelector) => ModelCommentConnectionModelSelector) = modelCommentConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ listComments: ModelCommentConnectionModelType}>(`query listComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) { listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
        ${typeof resultSelector === "function" ? resultSelector(new ModelCommentConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateCreateBlog(variables: { input: CreateBlogInput, condition?: ModelBlogConditionInput }, resultSelector: string | ((qb: BlogModelSelector) => BlogModelSelector) = blogModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createBlog: BlogModelType}>(`mutation createBlog($input: CreateBlogInput!, $condition: ModelBlogConditionInput) { createBlog(input: $input, condition: $condition) {
        ${typeof resultSelector === "function" ? resultSelector(new BlogModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateBlog(variables: { input: UpdateBlogInput, condition?: ModelBlogConditionInput }, resultSelector: string | ((qb: BlogModelSelector) => BlogModelSelector) = blogModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateBlog: BlogModelType}>(`mutation updateBlog($input: UpdateBlogInput!, $condition: ModelBlogConditionInput) { updateBlog(input: $input, condition: $condition) {
        ${typeof resultSelector === "function" ? resultSelector(new BlogModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteBlog(variables: { input: DeleteBlogInput, condition?: ModelBlogConditionInput }, resultSelector: string | ((qb: BlogModelSelector) => BlogModelSelector) = blogModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteBlog: BlogModelType}>(`mutation deleteBlog($input: DeleteBlogInput!, $condition: ModelBlogConditionInput) { deleteBlog(input: $input, condition: $condition) {
        ${typeof resultSelector === "function" ? resultSelector(new BlogModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreatePost(variables: { input: CreatePostInput, condition?: ModelPostConditionInput }, resultSelector: string | ((qb: PostModelSelector) => PostModelSelector) = postModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createPost: PostModelType}>(`mutation createPost($input: CreatePostInput!, $condition: ModelPostConditionInput) { createPost(input: $input, condition: $condition) {
        ${typeof resultSelector === "function" ? resultSelector(new PostModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdatePost(variables: { input: UpdatePostInput, condition?: ModelPostConditionInput }, resultSelector: string | ((qb: PostModelSelector) => PostModelSelector) = postModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updatePost: PostModelType}>(`mutation updatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) { updatePost(input: $input, condition: $condition) {
        ${typeof resultSelector === "function" ? resultSelector(new PostModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeletePost(variables: { input: DeletePostInput, condition?: ModelPostConditionInput }, resultSelector: string | ((qb: PostModelSelector) => PostModelSelector) = postModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deletePost: PostModelType}>(`mutation deletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) { deletePost(input: $input, condition: $condition) {
        ${typeof resultSelector === "function" ? resultSelector(new PostModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateComment(variables: { input: CreateCommentInput, condition?: ModelCommentConditionInput }, resultSelector: string | ((qb: CommentModelSelector) => CommentModelSelector) = commentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createComment: CommentModelType}>(`mutation createComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) { createComment(input: $input, condition: $condition) {
        ${typeof resultSelector === "function" ? resultSelector(new CommentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateComment(variables: { input: UpdateCommentInput, condition?: ModelCommentConditionInput }, resultSelector: string | ((qb: CommentModelSelector) => CommentModelSelector) = commentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateComment: CommentModelType}>(`mutation updateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) { updateComment(input: $input, condition: $condition) {
        ${typeof resultSelector === "function" ? resultSelector(new CommentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteComment(variables: { input: DeleteCommentInput, condition?: ModelCommentConditionInput }, resultSelector: string | ((qb: CommentModelSelector) => CommentModelSelector) = commentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteComment: CommentModelType}>(`mutation deleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) { deleteComment(input: $input, condition: $condition) {
        ${typeof resultSelector === "function" ? resultSelector(new CommentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    subscribeOnCreateBlog(variables?: {  }, resultSelector: string | ((qb: BlogModelSelector) => BlogModelSelector) = blogModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ onCreateBlog: BlogModelType}>(`subscription onCreateBlog { onCreateBlog {
        ${typeof resultSelector === "function" ? resultSelector(new BlogModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeOnUpdateBlog(variables?: {  }, resultSelector: string | ((qb: BlogModelSelector) => BlogModelSelector) = blogModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ onUpdateBlog: BlogModelType}>(`subscription onUpdateBlog { onUpdateBlog {
        ${typeof resultSelector === "function" ? resultSelector(new BlogModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeOnDeleteBlog(variables?: {  }, resultSelector: string | ((qb: BlogModelSelector) => BlogModelSelector) = blogModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ onDeleteBlog: BlogModelType}>(`subscription onDeleteBlog { onDeleteBlog {
        ${typeof resultSelector === "function" ? resultSelector(new BlogModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeOnCreatePost(variables?: {  }, resultSelector: string | ((qb: PostModelSelector) => PostModelSelector) = postModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ onCreatePost: PostModelType}>(`subscription onCreatePost { onCreatePost {
        ${typeof resultSelector === "function" ? resultSelector(new PostModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeOnUpdatePost(variables?: {  }, resultSelector: string | ((qb: PostModelSelector) => PostModelSelector) = postModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ onUpdatePost: PostModelType}>(`subscription onUpdatePost { onUpdatePost {
        ${typeof resultSelector === "function" ? resultSelector(new PostModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeOnDeletePost(variables?: {  }, resultSelector: string | ((qb: PostModelSelector) => PostModelSelector) = postModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ onDeletePost: PostModelType}>(`subscription onDeletePost { onDeletePost {
        ${typeof resultSelector === "function" ? resultSelector(new PostModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeOnCreateComment(variables?: {  }, resultSelector: string | ((qb: CommentModelSelector) => CommentModelSelector) = commentModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ onCreateComment: CommentModelType}>(`subscription onCreateComment { onCreateComment {
        ${typeof resultSelector === "function" ? resultSelector(new CommentModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeOnUpdateComment(variables?: {  }, resultSelector: string | ((qb: CommentModelSelector) => CommentModelSelector) = commentModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ onUpdateComment: CommentModelType}>(`subscription onUpdateComment { onUpdateComment {
        ${typeof resultSelector === "function" ? resultSelector(new CommentModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeOnDeleteComment(variables?: {  }, resultSelector: string | ((qb: CommentModelSelector) => CommentModelSelector) = commentModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<{ onDeleteComment: CommentModelType}>(`subscription onDeleteComment { onDeleteComment {
        ${typeof resultSelector === "function" ? resultSelector(new CommentModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
  })))
