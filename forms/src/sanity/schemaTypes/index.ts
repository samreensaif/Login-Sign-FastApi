import { type SchemaTypeDefinition } from 'sanity'
import { signup } from './signup'
import { login } from './login'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [signup,login],
}
