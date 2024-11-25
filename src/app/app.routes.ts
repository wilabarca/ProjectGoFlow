import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { UserViewComponent } from './modules/user-view/user-view.component';
import { AdministratorviewComponent } from './modules/administratorview/administratorview.component';
import { MathviewComponent } from './modules/mathview/mathview.component';
import { LandingpageComponent} from './modules/landingpage/landingpage.component';
import { SkillscollaboratorComponent } from './modules/skillscollaborator/skillscollaborator.component';
import { ChatComponent } from './modules/chats/chats.component';
import { AdministratorDeleteContributorComponent } from './modules/administrator/administrator-delete-contributor/administrator-delete-contributor.component';
import { AdministrativeAssignmentDeletionComponent } from './modules/administrator/administrative-assignment-deletion/administrative-assignment-deletion.component';



export const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: 'userview', component: UserViewComponent},
  { path: 'login', component: LoginComponent},
  {path:'administratorview', component: AdministratorviewComponent},
  {path:'mathview', component:MathviewComponent},
  {path:'landingpage', component:LandingpageComponent},
  {path:'skillscollaborator', component:SkillscollaboratorComponent},
  { path: 'chats', component: ChatComponent } ,
  { path: 'AdministratorDeleteContributor',  component: AdministratorDeleteContributorComponent},
  {path: 'AdministrativeAssignmentDeletion', component:AdministrativeAssignmentDeletionComponent }

];
