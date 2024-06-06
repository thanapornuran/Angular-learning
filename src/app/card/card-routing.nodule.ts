import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardComponent } from "./card.component";

const routes: Routes = [
    {
        path: "translate", component: CardComponent, loadChildren: async () => {
            const dynamicImport = await import("./card.module");
            return dynamicImport.CardModule;
        }
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class CardRoutingModule {

}