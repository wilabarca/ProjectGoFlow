import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { UserViewComponent } from './modules/user-view/user-view.component';
import { AdministratorviewComponent } from './modules/subjectuserview/administratorview.component';
import { MathviewComponent } from './modules/mathview/mathview.component';
import { LandingpageComponent} from './modules/landingpage/landingpage.component';
import { SkillscollaboratorComponent } from './modules/administrator/skillscollaborator/skillscollaborator.component';
import { ChatUserComponent } from './modules/chatuser/chats.component';
import { AdministratorDeleteContributorComponent } from './modules/administrator/administrator-delete-contributor/administrator-delete-contributor.component';
import { AdministrativeAssignmentDeletionComponent } from './modules/administrator/administrative-assignment-deletion/administrative-assignment-deletion.component';
import { RegisteruserComponent } from './modules/registeruser/registeruser.component';
import { ChatAdministratorComponent } from './modules/administrator/chatadministrator/chatadministrator.component';
import { RegistrycollaboratorComponent } from './modules/administrator/registrycollaborator/registrycollaborator.component';
import { ProgramminguserComponent } from './modules/programminguser/programminguser.component';
import { EnglishuserComponent } from './modules/englishuser/englishuser.component';



export const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: 'userview', component: UserViewComponent},
  { path: 'login', component: LoginComponent},
  {path:'administratorview', component: AdministratorviewComponent},
  {path:'mathview', component:MathviewComponent},
  {path:'landingpage', component:LandingpageComponent},
  {path:'skillscollaborator', component:SkillscollaboratorComponent},
  { path: 'chatuser', component: ChatUserComponent },
  { path: 'AdministratorDeleteContributor',  component: AdministratorDeleteContributorComponent},
  {path: 'AdministrativeAssignmentDeletion', component:AdministrativeAssignmentDeletionComponent },
  {path: 'RegisterUser', component: RegisteruserComponent},
  {path: 'ChatAdministrator', component: ChatAdministratorComponent},
  {path: 'Registrycollaborator', component: RegistrycollaboratorComponent},
  {path:'programminguser', component: ProgramminguserComponent},
  {path: 'englishuser', component: EnglishuserComponent}
];
