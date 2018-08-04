"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages/pages.component");
var blank_component_1 = require("./pages/blank/blank.component");
var search_component_1 = require("./pages/search/search.component");
var not_found_component_1 = require("./pages/errors/not-found/not-found.component");
var error_component_1 = require("./pages/errors/error/error.component");
exports.routes = [
    {
        path: '',
        component: pages_component_1.PagesComponent, children: [
            { path: '', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: 'app/pages/users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'form-controls', loadChildren: 'app/pages/form-controls/form-controls.module#FormControlsModule', data: { breadcrumb: 'Form Controls' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'icons', loadChildren: 'app/pages/icons/icons.module#IconsModule', data: { breadcrumb: 'Material Icons' } },
            { path: 'drag-drop', loadChildren: 'app/pages/drag-drop/drag-drop.module#DragDropModule', data: { breadcrumb: 'Drag & Drop' } },
            { path: 'schedule', loadChildren: 'app/pages/schedule/schedule.module#ScheduleModule', data: { breadcrumb: 'Schedule' } },
            { path: 'mailbox', loadChildren: 'app/pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
            { path: 'chat', loadChildren: 'app/pages/chat/chat.module#ChatModule', data: { breadcrumb: 'Chat' } },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: 'app/pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'blank', component: blank_component_1.BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: search_component_1.SearchComponent, data: { breadcrumb: 'Search' } }
        ]
    },
    { path: 'landing', loadChildren: 'app/pages/landing/landing.module#LandingModule' },
    { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
    { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
    { path: 'error', component: error_component_1.ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, {
    preloadingStrategy: router_1.PreloadAllModules,
});
//# sourceMappingURL=app.routing.js.map