/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ModelPostConnectionModel, ModelPostConnectionModelType } from "./ModelPostConnectionModel"
import { ModelPostConnectionModelSelector } from "./ModelPostConnectionModel.base"
import { RootStoreType } from "./RootStore"


/**
 * BlogBase
 * auto generated base class for the model BlogModel.
 */
export const BlogModelBase = ModelBase
  .named('Blog')
  .props({
    __typename: types.optional(types.literal("Blog"), "Blog"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
    posts: types.union(types.undefined, types.null, types.late((): any => ModelPostConnectionModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class BlogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  posts(builder?: string | ModelPostConnectionModelSelector | ((selector: ModelPostConnectionModelSelector) => ModelPostConnectionModelSelector)) { return this.__child(`posts`, ModelPostConnectionModelSelector, builder) }
}
export function selectFromBlog() {
  return new BlogModelSelector()
}

export const blogModelPrimitives = selectFromBlog().name
