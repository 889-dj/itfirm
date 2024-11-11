import Footer from "./components/footer"
import Header from "./components/header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from "react"
import Loading from "./components/loading"

function App() {
  const Home = React.lazy(() => import('./pages/home'));
  const About = React.lazy(() => import('./pages/about'));
  const Services = React.lazy(() => import('./pages/services'));
  const Contact = React.lazy(() => import('./pages/contact'));
  const Error = React.lazy(() => import('./pages/error'));

  // Service pages
  const Web = React.lazy(() => import('./pages/service/web'));
  const Voip = React.lazy(() => import('./pages/service/voip'));
  const Backup = React.lazy(() => import('./pages/service/backup'));
  const Consulting = React.lazy(() => import('./pages/service/consulting'));
  const ItConsulting = React.lazy(() => import('./pages/service/itconsulting'));
  const Cloud = React.lazy(() => import('./pages/service/cloud'));
  const Mobile = React.lazy(() => import('./pages/service/mobile'));
  const Security = React.lazy(() => import('./pages/service/security'));

  // subService pages
  // web
  const LandingPage = React.lazy(() => import('./pages/subservices/LandingPage'));
  const BusinessWebsite = React.lazy(() => import('./pages/subservices/BusinessWebsite'));
  const PerformanceOptimization = React.lazy(() => import('./pages/subservices/PerformanceOptimization'));
  const BackendManagement = React.lazy(() => import('./pages/subservices/BackendManagement'));
  const ProgressiveWebApps = React.lazy(() => import('./pages/subservices/ProgressiveWebApps'));

  // voip
  const VoIPInstallationandSetup = React.lazy(() => import('./pages/subservices/VoIPInstallationandSetup'));
  const VoIPCallCenterSolutions = React.lazy(() => import('./pages/subservices/VoIPCallCenterSolutions'));
  const VoIPCallMonitoring = React.lazy(() => import('./pages/subservices/VoIPCallMonitoring'));
  const VoIPSecurity = React.lazy(() => import('./pages/subservices/VoIPSecurity'));
  const VoIPIntegrationwithCRM = React.lazy(() => import('./pages/subservices/VoIPIntegrationwithCRM'));
  const HostedVoIPSolutions = React.lazy(() => import('./pages/subservices/HostedVoIPSolutions'));

  // mobile
  const AndroidAppDevelopment = React.lazy(() => import('./pages/subservices/AndroidAppDevelopment'));
  const IOSAppDevelopment = React.lazy(() => import('./pages/subservices/iOSAppDevelopment'));
  const CrossPlatformSolutions = React.lazy(() => import('./pages/subservices/CrossPlatformSolutions'));
  const MobileAppTesting = React.lazy(() => import('./pages/subservices/MobileAppTesting'));

  //security
  const ThreatIntelligence = React.lazy(() => import('./pages/subservices/ThreatIntelligence'));
  const SecurityAudits = React.lazy(() => import('./pages/subservices/SecurityAudits'));
  const NetworkSecurity = React.lazy(() => import('./pages/subservices/NetworkSecurity'));
  const VulnerabilityAssessments = React.lazy(() => import('./pages/subservices/VulnerabilityAssessments'));

  // consulting
  const ITStrategyConsulting = React.lazy(() => import('./pages/subservices/ITStrategyConsulting'));
  const ProjectManagement = React.lazy(() => import('./pages/subservices/ProjectManagement'));
  const BusinessProcessOptimization = React.lazy(() => import('./pages/subservices/BusinessProcessOptimization'));
  const RiskManagementConsulting = React.lazy(() => import('./pages/subservices/RiskManagementConsulting'));

  // itconsulting
  const ITInfrastructureConsulting = React.lazy(() => import('./pages/subservices/ITInfrastructureConsulting'));
  const DigitalTransformation = React.lazy(() => import('./pages/subservices/DigitalTransformation'));
  const SystemIntegration = React.lazy(() => import('./pages/subservices/SystemIntegration'));
  const ITBudgetingandPlanning = React.lazy(() => import('./pages/subservices/ITBudgetingandPlanning'));

  // cloud
  const CloudMigration = React.lazy(() => import('./pages/subservices/CloudMigration'));
  const CloudSecurity = React.lazy(() => import('./pages/subservices/CloudSecurity'));
  const CloudInfrastructureManagement = React.lazy(() => import('./pages/subservices/CloudInfrastructureManagement'));
  const CloudCostOptimization = React.lazy(() => import('./pages/subservices/CloudCostOptimization'));
  const SaaSSolutions = React.lazy(() => import('./pages/subservices/SaaSSolutions'));

  //backup
  const DataRecoveryServices = React.lazy(() => import('./pages/subservices/DataRecoveryServices'));
  const DataBackupAutomation = React.lazy(() => import('./pages/subservices/DataBackupAutomation'));  
  const DatabaseBackupSolutions = React.lazy(() => import('./pages/subservices/DatabaseBackupSolutions'));
  const OffSiteBackupManagement = React.lazy(() => import('./pages/subservices/Off-SiteBackupManagement'));


  return (
    <Router>
      <div>
        <Header />
        <main className="min-h-screen">
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Main routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Nested routes for services */}
              <Route path="/service" element={<Services />} />
              <Route path="/service/web" element={<Web />} />
              <Route path="/service/voip" element={<Voip />} />
              <Route path="/service/backup" element={<Backup />} />
              <Route path="/service/consulting" element={<Consulting />} />
              <Route path="/service/itconsulting" element={<ItConsulting />} />
              <Route path="/service/mobile" element={<Mobile />} />
              <Route path="/service/security" element={<Security />} />
              <Route path="/service/cloud" element={<Cloud />} />

              {/*sub Nested routes for services */}
              {/* web - 5 */}
              <Route path="/service/web/landingpages" element={<LandingPage />} />
              <Route path="/service/web/businesswebsites" element={<BusinessWebsite />} />
              <Route path="/service/web/backendmanagement" element={<BackendManagement />} />
              <Route path="/service/web/performanceoptimizations" element={<PerformanceOptimization />} />
              <Route path="/service/web/progressivewebapps" element={<ProgressiveWebApps />} />

              {/* voip - 6 */}
              <Route path="/service/voip/voipinstallationandsetup" element={<VoIPInstallationandSetup />} />
              <Route path="/service/voip/voipcallcentersolutions" element={<VoIPCallCenterSolutions />} />
              <Route path="/service/voip/voipcallmonitoring" element={<VoIPCallMonitoring />} />
              <Route path="/service/voip/voipintegrationwithcrm" element={<VoIPIntegrationwithCRM />} />
              <Route path="/service/voip/voipsecurity" element={<VoIPSecurity />} />
              <Route path="/service/voip/hostedvoipsolutions" element={<HostedVoIPSolutions />} />

              {/* security - 4 */}
              <Route path="/service/security/threatintelligence" element={<ThreatIntelligence />} />
              <Route path="/service/security/networksecurity" element={<NetworkSecurity />} />
              <Route path="/service/security/securityaudits" element={<SecurityAudits />} />
              <Route path="/service/security/vulnerabilityassessments" element={<VulnerabilityAssessments />} />

              {/* mobile - 4 */}
              <Route path="/service/mobile/iosappdevelopment" element={<IOSAppDevelopment />} />
              <Route path="/service/mobile/androidappdevelopment" element={<AndroidAppDevelopment />} />
              <Route path="/service/mobile/cross-platformsolutions" element={<CrossPlatformSolutions />} />
              <Route path="/service/mobile/mobileapptesting" element={<MobileAppTesting />} />

              {/* consulting - 4 */}
              <Route path="/service/consulting/businessprocessoptimization" element={<BusinessProcessOptimization />} />
              <Route path="/service/consulting/itstrategyconsulting" element={<ITStrategyConsulting />} />
              <Route path="/service/consulting/projectmanagement" element={<ProjectManagement />} />
              <Route path="/service/consulting/riskmanagementconsulting" element={<RiskManagementConsulting />} />

              {/* itconsulting - 4 */}
              <Route path="/service/itconsulting/itinfrastructureconsulting" element={<ITInfrastructureConsulting />} />
              <Route path="/service/itconsulting/digitaltransformation" element={<DigitalTransformation />} />
              <Route path="/service/itconsulting/systemintegration" element={<SystemIntegration />} />
              <Route path="/service/itconsulting/itbudgetingandplanning" element={<ITBudgetingandPlanning />} />

              {/* cloud */}
              <Route path="/service/cloud/cloudmigration" element={<CloudMigration />} />
              <Route path="/service/cloud/cloudsecurity" element={<CloudSecurity />} />
              <Route path="/service/cloud/cloudcostoptimization" element={<CloudCostOptimization />} />
              <Route path="/service/cloud/cloudinfrastructuremanagement" element={<CloudInfrastructureManagement />} />
              <Route path="/service/cloud/saassolutions" element={<SaaSSolutions />} />

              {/* Data Backup Automation",
    
      "Off-Site Backup Management" */}
              {/* backup */}
              <Route path="/service/backup/datarecoveryservices" element={<DataRecoveryServices />} />
              <Route path="/service/backup/databackupautomation" element={<DataBackupAutomation />} />
              <Route path="/service/backup/databasebackupsolutions" element={<DatabaseBackupSolutions />} />
              <Route path="/service/backup/offsitebackupmanagement" element={<OffSiteBackupManagement />} />

              {/* Catch-all error route */}
              <Route path='*' element={<Error />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
