import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';

Widget ratingstar(
    {void Function(double rate)? onRatingUpdate, double initRate = 0}) {
  return RatingBar(
    initialRating: initRate,
    direction: Axis.horizontal,
    glow: false,
    allowHalfRating: false,
    glowRadius: 0,
    itemCount: 5,
    wrapAlignment: WrapAlignment.start,
    ratingWidget: RatingWidget(
      full: DataImages.starfullsvg.toSvgImage(size: 30),
      empty: DataImages.staremtysvg.toSvgImage(size: 30),
      half: DataImages.starfullsvg.toSvgImage(size: 30),
    ),
    // wrapAlignment: WrapAlignment.spaceAround,
    //itemPadding: EdgeInsets.symmetric(horizontal: 0),
    maxRating: 2,
    itemSize: 30,

    onRatingUpdate: onRatingUpdate ?? (rating) {},
  );
}


                          //       Row(
                          //         children: [
                          //           DataImages.star_11.toPNGImage(size: 20),
                          //           const SizedBox(
                          //             width: 2,
                          //           ),
                          //           DataImages.star_11.toPNGImage(size: 20),
                          //           const SizedBox(
                          //             width: 2,
                          //           ),
                          //           DataImages.star_11.toPNGImage(size: 20),
                          //           const SizedBox(
                          //             width: 2,
                          //           ),
                          //           DataImages.star_11.toPNGImage(size: 20),
                          //           const SizedBox(
                          //             width: 2,
                          //           ),
                          //           DataImages.star_11.toPNGImage(size: 20),
                          //         ],
                          //       )
                          //     ],
                          //   ),
                          // ),
                          
