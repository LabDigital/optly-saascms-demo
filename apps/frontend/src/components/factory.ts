import 'server-only'
import { type ComponentFactory, DefaultComponentFactory, RichTextComponentDictionary } from '@remkoj/optimizely-cms-react/rsc'
import cmsComponents from './cms'

// Create the server factory, to be reused throughout the application
const defaultFactory = new DefaultComponentFactory()
// Optimizely Graph now also returns "_ChangesetItem" as a base type. There is no component for it,
// so ignore it when resolving components, the same way the other base contracts (_Item, _Content, ...) are.
defaultFactory.ignoredContracts.push('changesetitem')
export const factory : ComponentFactory = defaultFactory
factory.registerAll(RichTextComponentDictionary)
factory.registerAll(cmsComponents)

/**
 * Get the cached version of the Component Factory to use, this ensure that the
 * minimum number of instances of the factory will be created.
 */
export const setupFactory = () => factory;

export default setupFactory