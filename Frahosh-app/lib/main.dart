import 'dart:math';

import 'package:farahoosh/app/presentation/blocs/intrest_podcasts/intrest_podcasts_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/wallet/wallet_cubit.dart';
import 'package:farahoosh/app/presentation/router/extension.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:farahoosh/app/presentation/screens/profile/edite/profileEditescreen.dart';
import 'package:farahoosh/app/presentation/screens/wallet/increase/increase.dart';
import 'package:farahoosh/app/presentation/screens/wallet/transfer/transfer.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'app/presentation/blocs/faracoin/faracoin_cubit.dart';
import 'app/presentation/router/packages.dart';

void main() {
  Hive.initFlutter().then((_) {
    runApp(MultiBlocProvider(
      providers: [
        BlocProvider(
          create: (context) => SettingsCubit(),
          lazy: false,
        ),
        BlocProvider(
          create: (context) => NavbarCubit(),
        ),
        BlocProvider(
          create: (context) => UserCubit(),
        ),
        BlocProvider(
          create: (context) => WalletCubit(),
        ),
        BlocProvider(
          create: (context) => FaracoinCubit(),
        ),
        BlocProvider(
          create: (context) => IntrestPodcastsCubit(),
        ),
      ],
      child: Builder(builder: (context) {
        return MaterialApp(
          localizationsDelegates: const [
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('fa', ''), // English, no country code
          ],
          theme: ThemeData(
            textTheme: TextTheme(
              headline1: TextStyle(
                  fontFamily: "IRANSansXV",
                  fontSize:
                      context.watch<SettingsCubit>().state.normalTextSize + 4,
                  color: SolidColors.textTitleBlac,
                  fontWeight: FontWeight.bold),
              subtitle1: TextStyle(
                  fontFamily: "IRANSansXV",
                  fontSize:
                      context.watch<SettingsCubit>().state.normalTextSize + 2,
                  color: SolidColors.textTitleBlac),
              subtitle2: TextStyle(
                fontSize:
                    context.watch<SettingsCubit>().state.normalTextSize + 2,
                color: SolidColors.textTitleWhite,
              ),
              bodyText1: TextStyle(
                  fontFamily: "IRANSansXV",
                  fontSize: context.watch<SettingsCubit>().state.normalTextSize,
                  color: SolidColors.textTitleBlac),
              bodyText2: TextStyle(
                  fontFamily: "IRANSansXV",
                  fontSize: max(
                      context.watch<SettingsCubit>().state.normalTextSize - 2,
                      1),
                  color: SolidColors.textTitleGray),
            ),
          ),
          debugShowCheckedModeBanner: false,
          initialRoute: RouterPage.splash,
          routes: {
            RouterPage.splash: (_) => SplashScreen().toDirection,
            RouterPage.login: (_) => Login().toDirection,
            RouterPage.signup: (_) => Signup().toDirection,
            RouterPage.main: (_) => const MainPage().toDirection,
            RouterPage.profile: (_) => const ProfileScreen().toDirection,
            RouterPage.wallet: (_) => const WalletScreen().toDirection,
            RouterPage.transferScreen: (_) => const TransferScreen().toDirection,
            RouterPage.increaseScreen: (_) => const IncreaseScreen().toDirection,
            RouterPage.receipt: (_) => ReceiptScreen().toDirection,
            RouterPage.invitation: (_) => const InvitationScreen().toDirection,
            RouterPage.tickit: (_) => TickitScreen().toDirection,
            RouterPage.dictionary: (_) =>
                const NewDictionaryScreen().toDirection,
            RouterPage.setting: (_) => const SettingScreen().toDirection,
            RouterPage.calculator: (_) => CalculatorPage().toDirection,
            RouterPage.chronometr: (_) => ChronometrPage().toDirection,
            RouterPage.derivative: (_) => DerivativePage().toDirection,
            RouterPage.percent: (_) => PercentPage().toDirection,
            RouterPage.questionSolving: (_) =>
                const QuestionSolvingPage().toDirection,
            RouterPage.questionSolvingNewQuestion: (_) =>
                const NewQuestionPage().toDirection,
            RouterPage.questionSolvingList: (_) => const ListPage().toDirection,
            RouterPage.questionSolvingSolved: (_) =>
                const SolvedPage().toDirection,
            RouterPage.school: (_) => const SchoolPage().toDirection,
            RouterPage.schoolScore: (_) => ScoresPage().toDirection,
            RouterPage.schoolTest: (_) => TestPage().toDirection,
            RouterPage.tools: (_) => const ToolsPage().toDirection,
            RouterPage.search: (_) => const SearchPage().toDirection,
            RouterPage.onBoarding_1: (_) => const OnBoarding1().toDirection,
            RouterPage.onBoarding_2: (_) => const OnBoarding2().toDirection,
            RouterPage.onBoarding_3: (_) => const OnBoarding3().toDirection,
            RouterPage.onBoarding_4: (_) => const OnBoarding4().toDirection,
            RouterPage.planner: (_) => const PlannerPage().toDirection,
            RouterPage.profilescreen: (_) => const ProfileScreen().toDirection,
            RouterPage.profileEditeScreen: (_) => const ProfileEditeScreen().toDirection,
            RouterPage.profileCoin1: (_) => const ProfileCoinPage().toDirection,
            RouterPage.profileCoin2: (_) =>
                const ProfileCoinPage2().toDirection,
            RouterPage.profileCoin3: (_) => ProfileCoinPage3().toDirection,
            RouterPage.profileCoinGuide: (_) =>
                ProfileConinGuidePage().toDirection,
            RouterPage.profilePcychoinfo: (_) =>
                const ProfilePcychoinfoPage().toDirection,
            RouterPage.profileMain: (_) => const ProfileMainPage().toDirection,
            RouterPage.profilePcychoinfoNewtest: (_) =>
                const ProfilePcychoinfoNewtestPage().toDirection,
            RouterPage.profilePcychoinfoPretest: (_) =>
                const ProfilePcychoinfoPretestPage().toDirection,
            RouterPage.profileEduinfo: (_) =>
                const ProfileEduinfoPage().toDirection,
            RouterPage.leinter1: (_) => Leinter1().toDirection,

            RouterPage.ticketpage1: (_) => Ticket().toDirection,
            RouterPage.ticketpage2: (_) => NewTicket().toDirection,
            RouterPage.ticketpage3: (_) => const TicketSent().toDirection,
            RouterPage.ticketpage4: (_) => const TicketAgain().toDirection,

            RouterPage.matrix: (_) => const MatrixPage().toDirection,
            RouterPage.podcast1: (_) => PodcastPage1().toDirection,
            RouterPage.podcast2: (_) => const PodcastPage2().toDirection,
            RouterPage.podcast3: (_) => const PodcastPage3().toDirection,
            // RouterPage.podcast4: (_) => const PodcastPage4().toDirection,
            RouterPage.messenger: (_) => const Messenger().toDirection,
            RouterPage.reportcard: (_) => const ReportCard().toDirection,
            RouterPage.classbook2: (_) => ClassBook2().toDirection,
            RouterPage.classbook1: (_) => const ClassBook1().toDirection,
            RouterPage.testanalysis1: (_) => TestAnalysis().toDirection,
            RouterPage.testanalysis3: (_) => TestAnalysisPage3().toDirection,
            RouterPage.planner3: (_) => const PlannerPage3().toDirection,
            RouterPage.planner4: (_) => const PlannerPage4().toDirection,
            RouterPage.planner5: (_) => PlannerPage5().toDirection,

            // Tuition
            RouterPage.tuition: (_) => Tuition().toDirection,

            // consultant
            RouterPage.consultant1: (_) => ConsultantPage1().toDirection,
            RouterPage.consultant4: (_) => const ConsultantPage4().toDirection,
            RouterPage.consultantFinished: (_) =>
                const ConsultantFinishedPage().toDirection,
            RouterPage.consultant6: (_) =>
                const ConsultantFinishedAfterrate().toDirection,

            RouterPage.consultant3: (_) => ConsultantPage3().toDirection,

            RouterPage.consultantChat: (_) =>
                const ConsultantChat().toDirection,

            // school
            RouterPage.reportCard: (_) => const ReportCard().toDirection,
            RouterPage.handoutMain: (_) => const HandoutMain().toDirection,
            RouterPage.handoutMine: (_) => HandoutMine().toDirection,
            RouterPage.handoutOthers: (_) => HandoutOthers().toDirection,
            RouterPage.handoutVideo: (_) => const HandoutVideo().toDirection,
            RouterPage.classBook1: (_) => const ClassBook1().toDirection,
            RouterPage.classBook2: (_) => ClassBook2().toDirection,
            RouterPage.notifications: (_) => Notifications().toDirection,
            RouterPage.schoolScoreDiagram: (_) =>
                const ScoreDiagram().toDirection,
            RouterPage.schoolTestAVG: (_) => const TestAVG().toDirection,
            RouterPage.schoolTestMid: (_) => const TestMid().toDirection,
            RouterPage.schoolHomeworksText: (_) =>
                const SchoolHomeworksText().toDirection,
            RouterPage.schoolHomeworkChart: (_) =>
                SchoolHomeworkChart().toDirection,
            RouterPage.schoolChat: (_) => const SchoolChat().toDirection,

            // Weeklyschedule
            RouterPage.weeklyschedule: (_) =>
                const Weeklyschedule().toDirection,
            RouterPage.myschedule: (_) => MySchedule().toDirection,
            RouterPage.consultantSuggesiton: (_) =>
                ConsultantSuggesiton().toDirection,
            RouterPage.myschedutrPast: (_) => MysShedutrPast().toDirection,
            RouterPage.farahooshSuggestionPast: (_) =>
                FarahooshSuggestionPast().toDirection,
            RouterPage.farahooshSuggestion: (_) =>
                FarahooshSuggestion().toDirection,
            RouterPage.consultantSuggesitonPast: (_) =>
                ConsultantSuggesitonPast().toDirection,

            // picsgallery1
            RouterPage.picsgallery1: (_) => PicsGallery1().toDirection,
          },
        );
      }),
    ));
  });
}
