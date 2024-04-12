import '../../../router/packages.dart';
import '../../const/datacolors.dart';
import '../buttons/buttonWidget.dart';
import '../textField/TextFieldwidget.dart';

class QuestionHomeworkText extends StatelessWidget {
  const QuestionHomeworkText({
    Key? key,
    required this.size,
    required this.textTheme,
    required this.questionNumber,
    this.done = false,
    this.doing = false,
  }) : super(key: key);

  final Size size;
  final TextTheme textTheme;
  final int questionNumber;
  final bool done;
  final bool doing;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          width: size.width,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'شماره $questionNumber ',
                style: textTheme.bodyText1,
              ),
              Container(
                //      height: size.height,
                width: size.width,
                margin: const EdgeInsets.symmetric(vertical: 25),
                decoration: BoxDecoration(
                    borderRadius: const BorderRadius.all(Radius.circular(15)),
                    border: Border.all(color: SolidColors.black, width: 0.2),
                    color: SolidColors.white),
                child: Padding(
                  padding: const EdgeInsets.only(
                      left: 13, right: 13, bottom: 17, top: 9),
                  child: Text(
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.',
                    style: textTheme.subtitle1,
                    textDirection: TextDirection.rtl,
                  ),
                ),
              ),
            ],
          ),
        ),
        SizedBox(
          width: size.width,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'پاسخ دانش‌آموز  ',
                style: textTheme.bodyText1,
              ),
              Container(
                margin: const EdgeInsets.symmetric(vertical: 20),
                width: size.width,
                decoration: BoxDecoration(
                  color: done == true ? SolidColors.white : SolidColors.backgroundColor,
                  borderRadius: const BorderRadius.all(Radius.circular(15)),
                  border: Border.all(color: SolidColors.black, width: 0.2),
                ),
                child: const TextFieldWidget(
                  borderSideColor: SolidColors.black,
                  minLines: 4,
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 20),
                child: SizedBox(
                  width: size.width,
                  child: done == true ? Container() :
                  doing == true ? const ButtonWidget(title: ' ویرایش پاسخ', mainColor: false)
                  : const ButtonWidget(title: 'ثبت موقت پاسخ', mainColor: false),
                ),
              ),

            ],
          ),
        ),
      ],
    );
  }
}
