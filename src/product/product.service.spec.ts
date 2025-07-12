import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { ProductModule } from './product.module';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ProductModule]
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
