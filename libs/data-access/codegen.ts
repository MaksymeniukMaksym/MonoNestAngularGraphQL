import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'apps/api/src/app/schema.graphql',
  documents: ['libs/data-access/src/lib/graphql/**/*.graphql'],
  generates: {
    "libs/data-access/src/lib/generated/generated.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
      config: {
        addExplicitOverride: true
      }
    } as any
  }
}
export default config
