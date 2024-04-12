import 'package:farahoosh/app/presentation/blocs/faracoin/faracoin_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/profile/profile_coin/profileCoin_page/profileCoin_page.dart';
import 'package:farahoosh/app/presentation/screens/profile/profile_coin/profileEduinfo_Page/profileEduinfo_Page.dart';
import 'package:farahoosh/app/presentation/screens/profile/profile_coin/profilePcychoinfo_Page/profilePcychoinfo_Page.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../../../gen/assets.gen.dart';
import '../../../../router/packages.dart';
import '../../profilescreen.dart';

class ProfileMainPage extends StatelessWidget {
  const ProfileMainPage({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SingleChildScrollView(
      physics: const BouncingScrollPhysics(),
      child: Column(
        children: [
          const SizedBox(
            height: 20,
          ),
          // profile coin withe box (button)
          Align(
            child: Column(
              children: [
                InkWell(
                  child: Container(
                    width: size.width,
                    height: 220,
                    decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(15),
                        boxShadow: [
                          BoxShadow(
                            color: SolidColors.black.withOpacity(.02),
                            blurRadius: 15,
                            offset: const Offset(3, 3),
                          ),
                          BoxShadow(
                              color: SolidColors.black.withOpacity(.06),
                              blurRadius: 20,
                              offset: const Offset(-5, -5)),
                        ]),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        DataImages.safeBox.toJpgImage(size: 100),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              "تا الان",
                              style: textTheme.headline1,
                            ),
                            BlocBuilder<FaracoinCubit, FaracoinState>(
                              builder: (context, state) {
                                if (state is FaracoinLoading) {
                                  return const Text('...');
                                }
                                return Text(
                                  (state as FaracoinGeneral).formattedBalance,
                                  style: const TextStyle(
                                      fontFamily: "IRANSansXV",
                                      fontSize: 42,
                                      color: SolidColors.textTitleBlac,
                                      fontWeight: FontWeight.bold),
                                );
                              },
                            ),
                            Text(
                              "فراکوین به‌دست آوردی",
                              style: textTheme.headline1,
                            ),
                          ],
                        )
                      ],
                    ),
                  ),
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: ((context) => const ProfileCoinPage())));
                  },
                ),
                toVerticalSpaces,
                toBoxShadow(
                  context: context,
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: ((context) => const ProfileScreen())));
                  },
                  name: 'اطلاعات فردی',
                  icon: Center(child: Image.asset(Assets.icons.man.path)),
                ),
                toVerticalSpaces,
                toBoxShadow(
                  context: context,
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: ((context) => const ProfileEduinfoPage())));
                  },
                  name: 'اطلاعات درسی',
                  icon: Center(
                      child: Image.asset(Assets.icons.graduationIcon.path)),
                ),
                toVerticalSpaces,
                toBoxShadow(
                  context: context,
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: ((context) => const ProfilePcychoinfoPage())));
                  },
                  name: 'اطلاعات روانشناسی',
                  icon: Center(child: Image.asset(Assets.icons.heartIcon.path)),
                ),
                toVerticalSpaces,
              ],
            ),
          ).toSymmetric(H: 20.0),
        ],
      ),
    );
  }
}





// ProfileMainPage



// class ProfileMainPage extends StatefulWidget {
//   const ProfileMainPage({super.key});

//   @override
//   State<ProfileMainPage> createState() => _ProfileMainPageState();
// }

// class _ProfileMainPageState extends State<ProfileMainPage> {
//   @override
//   Widget build(BuildContext context) {
//     Size size = MediaQuery.of(context).size;
//     String x = "۱۲";
//     var textTheme = Theme.of(context).textTheme;
//     return SafeArea(
//       child: Scaffold(
//         body: Container(
//            decoration: const BoxDecoration(
//               gradient: LinearGradient(
//                 colors: GradiantColors.bgFrameGradient,
//                 begin: Alignment.topCenter,
//                 end: Alignment.bottomCenter,
//               ),
//             ),
//           child: Column(
//             children: [
//               // appbar
//               Appbar(
//                 title: "پروفایل",
//                 textTheme: textTheme,
//                 image: Image.asset(
//                   Assets.icons.arrowLeftIos.path,
//                   scale: 1,
//                 ),
//               ),
//               const SizedBox(height: 25,),
//               // profile coin withe box (button)
//               Padding(
//                 padding: const EdgeInsets.symmetric(horizontal: 20),
//                 child: InkWell(
//                   child: Container(
//                     height: 220,
//       decoration: BoxDecoration(
//           color: SolidColors.white,
//           border: Border.all(color: SolidColors.white, width: 0.4),
//           borderRadius: BorderRadius.circular(12),
//           boxShadow: const [
//             BoxShadow(
//               color: SolidColors.calculatorBox,
//               blurRadius: 2,
//               offset: Offset(0, 1), // Shadow position
//             ),
//           ],
//       ),
//       child: Center(
//           child: Padding(
//             padding: const EdgeInsets.only(bottom: 10),
//             child: Column(
//               mainAxisAlignment: MainAxisAlignment.spaceBetween,
//               children: [
//                 Image.asset(Assets.images.safeBox.path),
//                 Row(
//                   mainAxisAlignment: MainAxisAlignment.center,
//                   children: [
//                     Text("تاالان",style: textTheme.subtitle1,),
//                     Text(" $x ",style: const TextStyle(fontSize: 32,color: SolidColors.textTitleBlac),),
//                     Text("فراکوین به‌دست آوردی",style: textTheme.subtitle1,),

//                   ],
//                 ),
//               ],
//             ),
//           ),
//       ),
//     ),
//                 ),
//               ),
//               const SizedBox(height: 25,),
//               // profile coin withe box
//               Padding(
//                 padding: const EdgeInsets.symmetric(horizontal: 20),
//                 child: InkWell(
//                   child: SizedBox(
//                     height: size.height/8,
//                     child: BigWhiteBox(
//                       txt: "اطلاعات فردی",
//                       size: size,
//                       textTheme: textTheme,
//                       widget:
//                           Center(child: Image.asset(Assets.icons.man.path)),
//                     ),
//                   ),
//                   onTap: () {
                    
//                   },
//                 ),
//               ),
              
//               const SizedBox(height: 25,),
//               // profile coin withe box
//               Padding(
//                 padding: const EdgeInsets.symmetric(horizontal: 20),
//                 child: InkWell(
//                   child: SizedBox(
//                       height: size.height/8,
//                     child: BigWhiteBox(
//                       txt: "اطلاعات درسی",
//                       size: size,
//                       textTheme: textTheme,
//                       widget: Center(child: Image.asset(Assets.icons.graduationIcon.path)),
//                     ),
//                   ),
//                   onTap: () {
                    
//                   },
//                 ),
//               ),
           
//             ],
//           ),
//         ),
//       ),
//     );
//   }
// }
