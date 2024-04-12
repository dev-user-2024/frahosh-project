import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/textField/searchTextField.dart';

class PodcastPage3 extends StatelessWidget {
  const PodcastPage3({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            toApp(context: context, title: "اپیزودهای جدید"),
            Column(children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 20, 20, 10),
                child: SearchTextField(
                  hintText: 'پادکست مورد نظرت رو جست و جو کن...',
                ),
              ),
            ]),
                Expanded(
                  child: Stack(
                    children: [
                      SingleChildScrollView(
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 20),
                          child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                // serchepodcast(context),
                                DataImages.sort2.toPNGImage(size: 25),
                                const SizedBox(
                                  height: 25,
                                ),
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text("20 شهریور 1401",
                                        textDirection: TextDirection.rtl,
                                        style:
                                            Theme.of(context).textTheme.subtitle1),
                                    const SizedBox(
                                      height: 16,
                                    ),
                                    SizedBox(
                                      height: 200,
                                      width: size.width,
                                      child: ListView.builder(
                                          scrollDirection: Axis.horizontal,
                                          itemCount: 8,
                                          itemBuilder: (context, index) {
                                            return Column(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.start,
                                              children: [
                                                Container(
                                                    height: 120,
                                                    width: 120,
                                                    margin:
                                                        const EdgeInsets.symmetric(
                                                            horizontal: 12),
                                                    decoration: BoxDecoration(
                                                        borderRadius:
                                                            const BorderRadius.all(
                                                                Radius.circular(
                                                                    15)),
                                                        
                                                        border: Border.all(
                                                            color: SolidColors.grey,
                                                            width: 0.1)),
                                                    child: DataImages.podcast.toPNGImage(),
                                                        ), 
                                                Padding(
                                                  padding: const EdgeInsets.only(
                                                      right: 15, top: 8),
                                                  child: Text('زبان امروز',
                                                      textDirection:
                                                          TextDirection.rtl,
                                                      style: Theme.of(context)
                                                          .textTheme
                                                          .subtitle1),
                                                ),
                                              ],
                                            );
                                          }),
                                    ),
                                    const SizedBox(
                                      height: 150,
                                    ),
                                  ],
                                ),
                              ]),
                        ),
                      ),
                     NavBar(size: size)
                    ],
                  ),
                ),
              
          ]),
        ),
      ),
    );
  }
}
