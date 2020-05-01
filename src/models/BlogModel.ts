import { Instance } from "mobx-state-tree"
import { BlogModelBase } from "./BlogModel.base"

/* The TypeScript type of an instance of BlogModel */
export interface BlogModelType extends Instance<typeof BlogModel.Type> {}

/* A graphql query fragment builders for BlogModel */
export { selectFromBlog, blogModelPrimitives, BlogModelSelector } from "./BlogModel.base"

/**
 * BlogModel
 */
export const BlogModel = BlogModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
