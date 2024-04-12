
import '../../../router/packages.dart';
import '../../const/datacolors.dart';

class FormUser extends StatelessWidget {
  const FormUser({
    Key? key,
    required this.size,
    required this.textTheme,
    required this.name,
    required this.date,
    required this.time,
    required this.image,
    this.numberOfSms = 0,
  }) : super(key: key);

  final Size size;
  final TextTheme textTheme;
  final String name;
  final String date;
  final String time;
  final Widget image;
  final int numberOfSms;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 80,
      width: size.width,
      child: Column(
        children: [
          Row(
            mainAxisAlignment:
                MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  SizedBox(
                    height: 50,
                    width: 50,
                    child: CircleAvatar(
                      child: ClipRRect(
                          child: image
                              ),
                    ),
                  ),
                  const SizedBox(
                    width: 10,
                  ),
                  Text(
                    name,
                    style: textTheme.subtitle1,
                  ),
                ],
              ),
              Row(
                children: [
                  numberOfSms == 0 ? Container() :
                  Container(
                    height: 20,
                    width: 30,
                    decoration: const BoxDecoration(
                      borderRadius: BorderRadius.all(
                        Radius.circular(8),
                      ),
                      color: SolidColors.blue,
                    ),
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.only(right: 2,top: 1),
                        child: Text(
                          '$numberOfSms+',
                          style: const TextStyle(
                            fontSize: 12,
                            color: SolidColors
                                .textTitleWhite,
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 13,
                  ),
                  Column(
                    mainAxisAlignment:
                        MainAxisAlignment.center,
                    children: [
                      Text(
                        time,
                        style: textTheme.bodyText2,
                      ),
                      Text(
                        date,
                        style: textTheme.bodyText2,
                      ),
                    ],
                  ),
                ],
              )
            ],
          ),
          const SizedBox(
            height: 5,
          ),
          Container(
            decoration: const BoxDecoration(
                gradient: LinearGradient(
                    //    begin: Alignment.bottomCenter,
                    //   end: Alignment.centerRight,
                    colors: GradiantColors
                        .blackBoxColor)),
            child: const Divider(
              height: 1,
            ),
          )
        ],
      ),
    );
  }
}
