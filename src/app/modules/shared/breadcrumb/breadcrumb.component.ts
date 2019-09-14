import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter, startWith, distinctUntilChanged, map, subscribeOn } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Breadcrumb } from './breadcrumb';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {


  public breadcrumbs$: Observable<any>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.breadcrumbs$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(event => this.buildBreadCrumb(this.activatedRoute.root)),
      startWith(this.buildBreadCrumb(this.activatedRoute.root))
    );
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<Breadcrumb> = []) {

    let childrenRoutes: ActivatedRoute[] = route.children;

    if (childrenRoutes.length === 0) {
      return breadcrumbs;
    }

    for (let route of childrenRoutes) {
      if (!route.snapshot.data.hasOwnProperty('breadcrumb')) {
        return this.buildBreadCrumb(route, url, breadcrumbs);
      }

      let routeURL = route.snapshot.url.map(segment => segment.path).join("/");

      url += '/' + routeURL;

      let breadcrumb: Breadcrumb = {
        label: route.snapshot.data['breadcrumb'],
        url: url
      };

      breadcrumbs = [...breadcrumbs, breadcrumb];

      return this.buildBreadCrumb(route, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
