/**
 * @license
 * Copyright (C) Gnucoop soc. coop.
 *
 * This file is part of the Gnucoop Angular Toolkit (gngt).
 *
 * Gnucoop Angular Toolkit (gngt) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Gnucoop Angular Toolkit (gngt) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Gnucoop Angular Toolkit (gngt).  If not, see http://www.gnu.org/licenses/.
 *
 */
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AUTH_OPTIONS, AuthModule as CoreAuthModule, AuthUserInteractionsService as CoreAuthUserInteractionsService, JWT_OPTIONS, JwtHelperService, JwtInterceptor } from '@gngt/core/auth';
import { CommonModule as GngtCommonModule } from '@gngt/core/common';
import { AuthUserInteractionsService } from './auth-user-interactions';
import { LoginComponent } from './login';
import { LogoutConfirmDialogComponent } from './logout-confirm-dialog';
export class AuthModule {
    static forRoot(options) {
        return {
            ngModule: AuthModule,
            providers: [
                JwtHelperService,
                options.authOptionsProvider || { provide: AUTH_OPTIONS, useValue: options.authConfig },
                options.jwtOptionsProvider || { provide: JWT_OPTIONS, useValue: options.jwtConfig },
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            ]
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CoreAuthModule,
                    GngtCommonModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatSnackBarModule,
                    ReactiveFormsModule,
                ],
                declarations: [
                    LoginComponent,
                    LogoutConfirmDialogComponent,
                ],
                exports: [
                    LoginComponent,
                ],
                entryComponents: [
                    LogoutConfirmDialogComponent,
                ],
                providers: [{
                        provide: CoreAuthUserInteractionsService,
                        useClass: AuthUserInteractionsService,
                        deps: [MatDialog, MatSnackBar]
                    }]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvYXV0aC9hdXRoLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLFVBQVUsSUFBSSxjQUFjLEVBRTVCLDJCQUEyQixJQUFJLCtCQUErQixFQUM5RCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBQyxZQUFZLElBQUksZ0JBQWdCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBK0JyRSxNQUFNLE9BQU8sVUFBVTtJQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQTBCO1FBQ3ZDLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixPQUFPLENBQUMsbUJBQW1CLElBQUksRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFDO2dCQUNwRixPQUFPLENBQUMsa0JBQWtCLElBQUksRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFDO2dCQUNqRixFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7YUFDcEU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBeENGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCw0QkFBNEI7aUJBQzdCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO2lCQUNmO2dCQUNELGVBQWUsRUFBRTtvQkFDZiw0QkFBNEI7aUJBQzdCO2dCQUNELFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSwrQkFBK0I7d0JBQ3hDLFFBQVEsRUFBRSwyQkFBMkI7d0JBQ3JDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7cUJBQy9CLENBQUM7YUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEdudWNvb3AgQW5ndWxhciBUb29sa2l0IChnbmd0KS5cbiAqXG4gKiBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEdudWNvb3AgQW5ndWxhciBUb29sa2l0IChnbmd0KSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggR251Y29vcCBBbmd1bGFyIFRvb2xraXQgKGduZ3QpLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtcbiAgQVVUSF9PUFRJT05TLFxuICBBdXRoTW9kdWxlIGFzIENvcmVBdXRoTW9kdWxlLFxuICBBdXRoTW9kdWxlT3B0aW9ucyxcbiAgQXV0aFVzZXJJbnRlcmFjdGlvbnNTZXJ2aWNlIGFzIENvcmVBdXRoVXNlckludGVyYWN0aW9uc1NlcnZpY2UsXG4gIEpXVF9PUFRJT05TLFxuICBKd3RIZWxwZXJTZXJ2aWNlLFxuICBKd3RJbnRlcmNlcHRvclxufSBmcm9tICdAZ25ndC9jb3JlL2F1dGgnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGUgYXMgR25ndENvbW1vbk1vZHVsZX0gZnJvbSAnQGduZ3QvY29yZS9jb21tb24nO1xuXG5pbXBvcnQge0F1dGhVc2VySW50ZXJhY3Rpb25zU2VydmljZX0gZnJvbSAnLi9hdXRoLXVzZXItaW50ZXJhY3Rpb25zJztcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4nO1xuaW1wb3J0IHtMb2dvdXRDb25maXJtRGlhbG9nQ29tcG9uZW50fSBmcm9tICcuL2xvZ291dC1jb25maXJtLWRpYWxvZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29yZUF1dGhNb2R1bGUsXG4gICAgR25ndENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIExvZ291dENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTG9nb3V0Q29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IENvcmVBdXRoVXNlckludGVyYWN0aW9uc1NlcnZpY2UsXG4gICAgdXNlQ2xhc3M6IEF1dGhVc2VySW50ZXJhY3Rpb25zU2VydmljZSxcbiAgICBkZXBzOiBbTWF0RGlhbG9nLCBNYXRTbmFja0Jhcl1cbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IEF1dGhNb2R1bGVPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBdXRoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBdXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEp3dEhlbHBlclNlcnZpY2UsXG4gICAgICAgIG9wdGlvbnMuYXV0aE9wdGlvbnNQcm92aWRlciB8fCB7cHJvdmlkZTogQVVUSF9PUFRJT05TLCB1c2VWYWx1ZTogb3B0aW9ucy5hdXRoQ29uZmlnfSxcbiAgICAgICAgb3B0aW9ucy5qd3RPcHRpb25zUHJvdmlkZXIgfHwge3Byb3ZpZGU6IEpXVF9PUFRJT05TLCB1c2VWYWx1ZTogb3B0aW9ucy5qd3RDb25maWd9LFxuICAgICAgICB7cHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBKd3RJbnRlcmNlcHRvciwgbXVsdGk6IHRydWV9LFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==