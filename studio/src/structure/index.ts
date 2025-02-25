import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import pluralize from 'pluralize-esm'
import { Browser, AlignTopSimple, AlignBottomSimple, GlobeHemisphereWest } from "@phosphor-icons/react"


/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['site', 'homepage', 'online', 'offline', 'headerSettings', 'footerSettings', 'assist.instruction.context']

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Website Content')
    .items([

      S.listItem()
              .title("Site Settings")
              .id("site")
              .icon(GlobeHemisphereWest)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("site")
                  .documentId("site")
              ),


            S.listItem()
              .title("Header")
              .id("headerSettings")
              .icon(AlignTopSimple)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("headerSettings")
                  .documentId("headerSettings")
              ),


            S.listItem()
              .title("Footer")
              .id("footerSettings")
              .icon(AlignBottomSimple)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("footerSettings")
                  .documentId("footerSettings")
              ),

            S.listItem()
              .title("Homepage")
              .id("homepage")
              .icon(Browser)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("homepage")
                  .documentId("homepage")
              ),

            S.listItem()
              .title("Online")
              .id("online")
              .icon(Browser)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("online")
                  .documentId("online")
              ),


            S.listItem()
              .title("Offline")
              .id("offline")
              .icon(Browser)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("offline")
                  .documentId("offline")
              ),


      ...S.documentTypeListItems()
        // Remove the "assist.instruction.context" and "settings" content  from the list of content types
        .filter((listItem: any) => !DISABLED_TYPES.includes(listItem.getId()))
        // Pluralize the title of each document type.  This is not required but just an option to consider.
        .map((listItem) => {
          return listItem.title(pluralize(listItem.getTitle() as string))
        }),
    ])
