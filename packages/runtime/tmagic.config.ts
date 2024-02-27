import path from 'path';

import { defineConfig } from '@tmagic/cli';

export default defineConfig({
  packages: [
    path.join(__dirname, '../components'),
    '@tmagic/ui', 
  ],
  componentFileAffix: '.vue',
  dynamicImport: true,
  // npmConfig: {
  //   /** pnpm | npm | yarn */
  //   client: 'npm',
  //   /** npm镜像代理 */
  //   registry: 'https://registry.npmjs.org/'
  // }
});
