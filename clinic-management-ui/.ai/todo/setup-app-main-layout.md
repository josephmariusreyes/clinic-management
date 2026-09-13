## Goal
- Setup the app main layout component
- Setup the main nav bar menu

## Todos

- create stand alone component `app-sidebar` component under `src\app\shared\components`
- create stand alone component `app-site-header` component under `src\app\shared\components`

- `src\app\shared\layout\app-main-layout\app-main-layout.component.ts`, will be the layout for authenticated users
-- The main layout will leverage spartan UI block A sidebar with a sticky header for reference I pasted below the code in their sample, i want you to implement something similar

app-main-layout is equivalent to spartan-sidebar-inset
app-sidebar is to spartan-app-sidebar-inset
app-site-header is to spartan-site-header-inset

===

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { AppSidebarInset } from './sidebar-inset/app-sidebar';
import { SiteHeader } from './sidebar-inset/site-header';

@Component({
	selector: 'spartan-sidebar-inset',
	imports: [HlmSidebarImports, SiteHeader, AppSidebarInset],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'block',
	},
	styleUrl: '../../blocks-preview-default.css',
	template: `
		<spartan-app-sidebar-inset>
			<main hlmSidebarInset>
				<spartan-site-header-inset />
				<div class="flex flex-1 flex-col gap-4 p-4">
					<div class="grid auto-rows-min gap-4 md:grid-cols-3">
						<div class="bg-muted/50 aspect-video rounded-xl"></div>
						<div class="bg-muted/50 aspect-video rounded-xl"></div>
						<div class="bg-muted/50 aspect-video rounded-xl"></div>
					</div>
					<div class="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min"></div>
				</div>
			</main>
		</spartan-app-sidebar-inset>
	`,
})
export default class SidebarInsetPage {}

===

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmBreadcrumbImports } from '@spartan-ng/helm/breadcrumb';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

@Component({
	selector: 'spartan-site-header-inset',
	imports: [HlmSidebarImports, HlmSeparatorImports, HlmBreadcrumbImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<header class="flex h-16 shrink-0 items-center gap-2">
			<div class="flex items-center gap-2 px-4">
				<button hlmSidebarTrigger></button>
				<hlm-separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
				<nav hlmBreadcrumb>
					<ol hlmBreadcrumbList>
						<li hlmBreadcrumbItem class="hidden sm:block">
							<a hlmBreadcrumbLink link="/">Building Your Application</a>
						</li>
						<li hlmBreadcrumbSeparator class="hidden sm:block"></li>
						<li hlmBreadcrumbItem>
							<a hlmBreadcrumbPage>Data Fetching</a>
						</li>
					</ol>
				</nav>
			</div>
		</header>
	`,
})
export class SiteHeader {}

===

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCommand } from '@ng-icons/lucide';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { data } from '../../shared/sidebar/data';
import { NavMain } from '../../shared/sidebar/nav-main';
import { NavProjects } from '../../shared/sidebar/nav-projects';
import { NavSecondary } from '../../shared/sidebar/nav-secondary';
import { NavUser } from '../../shared/sidebar/nav-user';

@Component({
	selector: 'spartan-app-sidebar-inset',
	imports: [HlmSidebarImports, NgIcon, NavMain, NavProjects, NavUser, NavSecondary],
	providers: [provideIcons({ lucideCommand })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div hlmSidebarWrapper>
			<hlm-sidebar variant="inset">
				<hlm-sidebar-header>
					<ul hlmSidebarMenu>
						<li hlmSidebarMenuItem>
							<a hlmSidebarMenuButton size="lg" href="#">
								<div
									class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
								>
									<ng-icon name="lucideCommand" class="text-base" />
								</div>
								<div class="grid flex-1 text-left text-sm leading-tight">
									<span class="truncate font-medium">Acme Inc</span>
									<span class="truncate text-xs">Enterprise</span>
								</div>
							</a>
						</li>
					</ul>
				</hlm-sidebar-header>

				<hlm-sidebar-content>
					<spartan-nav-main [items]="data.navMain" />
					<spartan-nav-projects [projects]="data.projects" />
					<spartan-nav-secondary class="mt-auto" [items]="data.navSecondary" />
				</hlm-sidebar-content>
				<hlm-sidebar-footer>
					<spartan-nav-user [user]="data.user" />
				</hlm-sidebar-footer>
			</hlm-sidebar>
			<ng-content />
		</div>
	`,
})
export class AppSidebarInset {
	public readonly data = data;
}

===

 for the links create static links for now

## completed

- Added standalone `app-sidebar` and `app-site-header` components under `src/app/shared/components`.
- Implemented static navigation links for the dashboard, doctors, patients, and administration areas.
- Replaced the placeholder main layout with a responsive sidebar, sticky-style header, collapse toggle, and projected authenticated content area.
- Added a router outlet to the main layout so authenticated child routes can render inside the shell.
- Added focused styling for the clinic workspace shell, navigation states, profile footer, and mobile layout.
- Kept the implementation self-contained because the requested `@spartan-ng/helm` package is not available from the configured npm registry.



