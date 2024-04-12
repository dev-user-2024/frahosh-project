import 'package:dio/dio.dart';
import 'package:encrypt/encrypt.dart' as enc;
import 'package:farahoosh/app/presentation/router/packages.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:local_auth/local_auth.dart';

abstract class ENC {
  static const String _firstKey = r"w9LoYyjV|v5$/+FH;Z?9:?+1'}M(==Hd";
  static const String _firstIv = r"b!kD^hqCjZ2)";
  static const String _secondKey = r"#z~opnLq,X{bH(im";
  static const String _secondIv = r"+{Z'xm@+;lpnC5h";

  static late final Box<String> _dataBox;

  static String _decrypt(String encrypted) =>
      enc.Encrypter(enc.AES(enc.Key.fromUtf8(_firstKey))).decrypt64(
          enc.Encrypter(enc.AES(enc.Key.fromUtf8(_secondKey)))
              .decrypt64(encrypted, iv: enc.IV.fromUtf8(_secondIv)),
          iv: enc.IV.fromUtf8(_firstIv));

  static String _encrypt(String plainText) =>
      enc.Encrypter(enc.AES(enc.Key.fromUtf8(_secondKey)))
          .encrypt(
              enc.Encrypter(enc.AES(enc.Key.fromUtf8(_firstKey)))
                  .encrypt(plainText, iv: enc.IV.fromUtf8(_firstIv))
                  .base64,
              iv: enc.IV.fromUtf8(_secondIv))
          .base64;

  static Future<Box<String>> _openBox() => Hive.openBox<String>('app-data',
      encryptionCipher:
          HiveAesCipher(r"&0n@43*Yj0pVRCHHA5tQjwU^*PQ$05S6".codeUnits));

  static Future<void> initBox() => _openBox().then((value) {
        _dataBox = value;
      }).catchError((_) {
        Hive.deleteBoxFromDisk('app-data');
        _openBox();
      });

  static void writeToBox(String key, String value) => _dataBox.put(key, value);
  static String? getFromBox(String key) => _dataBox.get(key);

  static Future<String?> getToken() async {
    final box = await Hive.openBox<String>('auth-data',
        encryptionCipher:
            HiveAesCipher(r"kdn&^$sajdI0n@tQjwp*HHA5U^*PQ$43".codeUnits));
    try {
      final token = box.get('token') as String;
      box.close();
      return _decrypt(token);
    } catch (_) {
      return null;
    }
  }

  static Future<Map<String, String>> getFingerData() async {
    final box = await Hive.openBox<String>('finger-data',
        encryptionCipher:
            HiveAesCipher(r"jwpPdI0ntQ&^$s@3Q*HH$4kdnajA5U^*".codeUnits));

    final email = box.get('email') as String;
    final pass = box.get('password') as String;
    box.close();

    return {'email': email, 'pass': _decrypt(_decrypt(pass))};
  }

  static Future<void> deleteFingerData() =>
      Hive.deleteBoxFromDisk('finger-data');

  static Future<void> deleteTokenData() => Hive.deleteBoxFromDisk('auth-data');

  static Future<bool> localAuth(String reason) async {
    final auth = LocalAuthentication();
    if (await auth.canCheckBiometrics &&
        (await auth.getAvailableBiometrics()).isNotEmpty) {
      return auth.authenticate(localizedReason: reason);
    }
    return false;
  }

  static Future<void> saveToken(String plainToken) async {
    final box = await Hive.openBox<String>('auth-data',
        encryptionCipher:
            HiveAesCipher(r"kdn&^$sajdI0n@tQjwp*HHA5U^*PQ$43".codeUnits));

    await box.put('token', _encrypt(plainToken));
    await box.close();
  }

  static Future<void> saveFingerprintData(String email, String password) async {
    final box = await Hive.openBox<String>('finger-data',
        encryptionCipher:
            HiveAesCipher(r"jwpPdI0ntQ&^$s@3Q*HH$4kdnajA5U^*".codeUnits));

    await box.put('email', email);
    await box.put('password', _encrypt(_encrypt(password)));
    return box.close();
  }
}
