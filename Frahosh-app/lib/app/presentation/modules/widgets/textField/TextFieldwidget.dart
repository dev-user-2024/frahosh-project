import 'package:flutter/material.dart';
import '../../const/datacolors.dart';

class TextFieldWidget extends StatelessWidget {
  final TextEditingController? controller;
  final String? labelText;
  final String? hintText;
  final int? minLines;
  final int? maxLines;
  final double borderWidth;
  final Widget? prefixIcon;
  final Widget? suffixIcon;
  final void Function(String)? onChanged;
  final bool obscureText;
  final Color borderSideColor;
  final Color hintColor;
  final bool enabled;
  final bool lineThrough;
  final bool isSearchTextField;
  final TextAlign textAlign;
  final FormFieldValidator<String>? validator;
  const TextFieldWidget({
    super.key,
    this.controller,
    this.labelText,
    this.onChanged,
    this.lineThrough = false,
    this.minLines,
    this.maxLines,
    this.textAlign = TextAlign.start,
    this.hintText,
    this.hintColor = SolidColors.hintTextColor,
    required this.borderSideColor,
    this.prefixIcon,
    this.obscureText = false,
    this.enabled = true,
    this.isSearchTextField = false,
    this.suffixIcon,
    this.validator,
    this.borderWidth = 0.2,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      child: TextFormField(
        controller: controller,
        validator: validator,
        enabled: enabled,
        textAlign: textAlign,
        minLines: minLines,
        onChanged: onChanged,
        maxLines: obscureText ? 1 : maxLines,
        style: TextStyle(
            decoration: lineThrough == true
                ? TextDecoration.lineThrough
                : TextDecoration.none,
            fontSize: 14,
            color: Colors.black,
            fontFamily: "IRANSansXV"),
        obscureText: obscureText,
        decoration: InputDecoration(
          border: InputBorder.none,
          labelText: labelText,
          
          hintText: hintText,
          hintStyle: TextStyle(fontSize: 14, color: hintColor),
          labelStyle: TextStyle(fontSize: 14, color: hintColor),
          //filled: true,

          enabledBorder: OutlineInputBorder(
              borderRadius:
                  BorderRadius.circular(isSearchTextField == false ? 15 : 20),
              borderSide: BorderSide(color: borderSideColor, width: borderWidth)),

          disabledBorder: OutlineInputBorder(
              borderRadius:
                  BorderRadius.circular(isSearchTextField == false ? 15 : 20),
              borderSide: BorderSide(color: borderSideColor, width: borderWidth)),

          focusedErrorBorder: OutlineInputBorder(
              borderRadius:
                  BorderRadius.circular(isSearchTextField == false ? 15 : 20),
              borderSide: BorderSide(color: borderSideColor, width: borderWidth)),
          errorBorder: OutlineInputBorder(
              borderRadius:
                  BorderRadius.circular(isSearchTextField == false ? 15 : 20),
              borderSide: BorderSide(color: borderSideColor, width: borderWidth)),
          focusedBorder: OutlineInputBorder(
              borderRadius:
                  BorderRadius.circular(isSearchTextField == false ? 15 : 20),
              borderSide: BorderSide(color: borderSideColor, width: borderWidth)),
          prefixIcon: prefixIcon,
          suffixIcon: suffixIcon,
        ),
      ),
    );
  }
}
