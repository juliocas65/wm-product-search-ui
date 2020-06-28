import { AuthGuard } from './AuthGuard';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Providers :: AuthGuard ::', () => {
  let authGuard: AuthGuard;
  let router: Router;
  let state: RouterStateSnapshot;
  let route: ActivatedRouteSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: AuthGuard, useClass: AuthGuard }
      ]
    });

    router = TestBed.get(Router);
    authGuard = TestBed.get(AuthGuard);
    state = router.routerState.snapshot;
    route = new ActivatedRouteSnapshot();
  });

  it('should create the preevaluate form', async(() => {
    expect(authGuard).toBeTruthy();
  }));
});
