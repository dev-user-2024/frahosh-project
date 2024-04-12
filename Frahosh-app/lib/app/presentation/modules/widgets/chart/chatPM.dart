
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';

import '../../../router/packages.dart';
import '../../const/urlimages.dart';

class ChatPM extends StatelessWidget {
  const ChatPM({
    Key? key,
    required this.isMe,
    this.isFinishdPM = true,
    required this.textTheme,
    required this.size,
    required this.text,
  }) : super(key: key);

  final bool isMe;
  final bool isFinishdPM;
  final TextTheme textTheme;
  final Size size;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          isMe == false ? Text("8:01",style: textTheme.subtitle1,) : 
          Container(),
          Container(
            width: isMe == true ? size.width/1.25 : size.width/1.4 ,
            decoration: BoxDecoration(
              color: isMe == true ? SolidColors.blue : SolidColors.white,
              border:
                  Border.all(color: SolidColors.blue, width: 0.4),
              borderRadius:  BorderRadius.only(
                topRight: const Radius.circular(25),
                topLeft: const Radius.circular(25),
                
                bottomLeft: isMe == true ? const Radius.circular(25) : const Radius.circular(0),
                bottomRight: isMe == true ? const Radius.circular(0) : const Radius.circular(25),
              ),
            ),
            child: Padding(
              padding: const EdgeInsets.fromLTRB(12, 18, 12, 18),
              child: Text(text,style: isMe == true ? textTheme.subtitle2 : textTheme.subtitle1,),
            ),
          ),
          isMe == true ? Text("8:01",style: textTheme.subtitle1,) :
          isFinishdPM == false ? Container() :
          SizedBox(
              height: 40,
              width: 40,
              child: CircleAvatar(
                radius: 50,
                child: ClipRRect(
                    child: DataImages.aliHoseyni
                        .toPNGImage()),
              ),
            ),
        ],
      ),
    );
  }
}
