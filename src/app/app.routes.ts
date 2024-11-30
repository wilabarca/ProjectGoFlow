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
import { TaksboardComponent } from './modules/taksboard/taksboard.component';
import { UserProfileComponent } from './modules/userprofile/userprofile.component';
import { HomecollaboratorComponent } from './modules/administrator/homecollaborator/homecollaborator.component';
import { MathviewadministratorComponent } from './modules/administrator/mathviewadministrator/mathviewadministrator.component';
import { EnglishadministratorComponent } from './modules/administrator/englishadministrator/englishadministrator.component';
import { ProgrammingadministratorComponent } from './modules/administrator/programmingadministrator/programmingadministrator.component';
import { DeleteuserComponent } from './modules/administrator/deleteuser/deleteuser.component';
import { ProfilecontributerComponent } from './modules/administrator/profilecontributer/profilecontributer.component';



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
  {path: 'Chatcollaborator', component: ChatAdministratorComponent},
  {path: 'Registrycollaborator', component: RegistrycollaboratorComponent},
  {path:'programminguser', component: ProgramminguserComponent},
  {path: 'englishuser', component: EnglishuserComponent},
  {path: 'Taksboard', component: TaksboardComponent},
  {path: 'userprofile', component: UserProfileComponent},
  {path:'Homecollaborator', component: HomecollaboratorComponent},
  {path: 'Mathviewadministrator',  component:MathviewadministratorComponent},
  {path:'Englishadministrator', component:EnglishadministratorComponent},
  {path: 'Programmingadministrator', component: ProgrammingadministratorComponent},
  {path:'Deleteuser', component: DeleteuserComponent},
  {path:'Profilecontributer',  component: ProfilecontributerComponent}
];
