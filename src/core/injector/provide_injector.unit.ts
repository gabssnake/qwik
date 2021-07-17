/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */

import { provideInjector } from './provide_injector';
import type { Injector } from './types';

describe('provideInjector', () => {
  it('should return an injector', async () => {
    const injector: Injector = {} as any;
    expect(await provideInjector()(injector)).toEqual(injector);
  });
});