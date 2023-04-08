import { getSharedConfig } from '../vite.config.shared';

export default getSharedConfig({
  build: {
    lib: {
      name: 'shared',
    },
  },
});
