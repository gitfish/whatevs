import { Instance } from "mobx-state-tree"
import { ModelBlogConnectionModelBase } from "./ModelBlogConnectionModel.base"

/* The TypeScript type of an instance of ModelBlogConnectionModel */
export interface ModelBlogConnectionModelType extends Instance<typeof ModelBlogConnectionModel.Type> {}

/* A graphql query fragment builders for ModelBlogConnectionModel */
export { selectFromModelBlogConnection, modelBlogConnectionModelPrimitives, ModelBlogConnectionModelSelector } from "./ModelBlogConnectionModel.base"

/**
 * ModelBlogConnectionModel
 */
export const ModelBlogConnectionModel = ModelBlogConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
