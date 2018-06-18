import { MaterialsModule } from './materials.module';

describe('MaterialsModule', () => {
  let materialsModule: MaterialsModule;

  beforeEach(() => {
    materialsModule = new MaterialsModule();
  });

  it('should create an instance', () => {
    expect(materialsModule).toBeTruthy();
  });
});
