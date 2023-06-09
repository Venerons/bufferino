/**
 * @file Utility functions to handle buffers and byte data types.
 * @copyright 2023 Daniele Veneroni
 * @author Daniele Veneroni
 */

// 8 bit unsigned
const u8_dec_to_hex = (value) => {
	const view = new DataView(new ArrayBuffer(1));
	view.setUint8(0, value);
	return buffer_to_hex(view.buffer);
};
const u8_hex_to_dec = (value) => {
	return parseInt(value, 16);
};

// 8 bit signed
const i8_dec_to_hex = (value) => {
	const view = new DataView(new ArrayBuffer(1));
	view.setInt8(0, value);
	return buffer_to_hex(view.buffer);
};
const i8_hex_to_dec = (value) => {
	const view = new DataView(new ArrayBuffer(1));
	view.setUint8(0, parseInt(value, 16));
	return view.getInt8(0);
};

// 16 bit unsigned
const u16_dec_to_hex = (value) => {
	const view = new DataView(new ArrayBuffer(2));
	view.setUint16(0, value);
	return buffer_to_hex(view.buffer);
};
const u16_hex_to_dec = (value) => {
	return parseInt(value, 16);
};

// 16 bit signed
const i16_dec_to_hex = (value) => {
	const view = new DataView(new ArrayBuffer(2));
	view.setInt16(0, value);
	return buffer_to_hex(view.buffer);
};
const i16_hex_to_dec = (value) => {
	const view = new DataView(new ArrayBuffer(2));
	view.setUint16(0, parseInt(value, 16));
	return view.getInt16(0);
};

// 32 bit unsigned
const u32_dec_to_hex = (value) => {
	const view = new DataView(new ArrayBuffer(4));
	view.setUint32(0, value);
	return buffer_to_hex(view.buffer);
};
const u32_hex_to_dec = (value) => {
	return parseInt(value, 16);
};

// 32 bit signed
const i32_dec_to_hex = (value) => {
	const view = new DataView(new ArrayBuffer(4));
	view.setInt32(0, value);
	return buffer_to_hex(view.buffer);
};
const i32_hex_to_dec = (value) => {
	const view = new DataView(new ArrayBuffer(4));
	view.setUint32(0, parseInt(value, 16));
	return view.getInt32(0);
};

// 64 bit unsigned
const u64_dec_to_hex = (value) => {
	const view = new DataView(new ArrayBuffer(8));
	view.setBigUint64(0, value);
	return buffer_to_hex(view.buffer);
};
const u64_hex_to_dec = (value) => {
	return parseInt(value, 16);
};

// 64 bit signed
const i64_dec_to_hex = (value) => {
	const view = new DataView(new ArrayBuffer(8));
	view.setBigInt64(0, value);
	return buffer_to_hex(view.buffer);
};
const i64_hex_to_dec = (value) => {
	const view = new DataView(new ArrayBuffer(8));
	view.setBigUint64(0, parseInt(value, 16));
	return view.getBigInt64(0);
};

// 32 bit floating point
const f32_dec_to_hex = (value) => {
	const view = new DataView(new ArrayBuffer(4));
	view.setFloat32(0, value);
	return buffer_to_hex(view.buffer);
};
const f32_hex_to_dec = (value) => {
	const view = new DataView(new ArrayBuffer(4));
	view.setUint32(0, parseInt(value, 16));
	return view.getFloat32(0);
};

// 64 bit floating point
const f64_dec_to_hex = (value) => {
	const view = new DataView(new ArrayBuffer(8));
	view.setFloat64(0, value);
	return buffer_to_hex(view.buffer);
};
const f64_hex_to_dec = (value) => {
	const view = new DataView(new ArrayBuffer(8));
	view.setBigUint64(0, parseInt(value, 16));
	return view.getFloat64(0);
};

/**
 * Return the hexadecimal representation of a decimal number with the given data type.
 * @param {'u8' | 'i8' | 'u16' | 'i16' | 'u32' | 'i32' | 'u64' | 'i64' | 'f32' | 'f64'} data_type - The data type.
 * @param {number} dec - The decimal number.
 * @returns {string} The hexadecimal string representation.
 */
const dec_to_hex = (data_type, dec) => {
	switch (data_type) {
		case 'u8':
			return u8_dec_to_hex(dec);
		case 'i8':
			return i8_dec_to_hex(dec);
		case 'u16':
			return u16_dec_to_hex(dec);
		case 'i16':
			return i16_dec_to_hex(dec);
		case 'u32':
			return u32_dec_to_hex(dec);
		case 'i32':
			return i32_dec_to_hex(dec);
		case 'u64':
			return u64_dec_to_hex(dec);
		case 'i64':
			return i64_dec_to_hex(dec);
		case 'f32':
			return f32_dec_to_hex(dec);
		case 'f64':
			return f64_dec_to_hex(dec);
		default:
			return null;
	}
};

/**
 * Return the decimal number representation of an hexadecimal string with the given data type.
 * @param {'u8' | 'i8' | 'u16' | 'i16' | 'u32' | 'i32' | 'u64' | 'i64' | 'f32' | 'f64'} data_type - The data type.
 * @param {string} hex - The hexadecimal string.
 * @returns {number} The decimal number representation.
 */
const hex_to_dec = (data_type, hex) => {
	switch (data_type) {
		case 'u8':
			return u8_hex_to_dec(hex);
		case 'i8':
			return i8_hex_to_dec(hex);
		case 'u16':
			return u16_hex_to_dec(hex);
		case 'i16':
			return i16_hex_to_dec(hex);
		case 'u32':
			return u32_hex_to_dec(hex);
		case 'i32':
			return i32_hex_to_dec(hex);
		case 'u64':
			return u64_hex_to_dec(hex);
		case 'i64':
			return i64_hex_to_dec(hex);
		case 'f32':
			return f32_hex_to_dec(hex);
		case 'f64':
			return f64_hex_to_dec(hex);
		default:
			return null;
	}
};

/*
########  ##     ## ######## ######## ######## ########
##     ## ##     ## ##       ##       ##       ##     ##
##     ## ##     ## ##       ##       ##       ##     ##
########  ##     ## ######   ######   ######   ########
##     ## ##     ## ##       ##       ##       ##   ##
##     ## ##     ## ##       ##       ##       ##    ##
########   #######  ##       ##       ######## ##     ##
*/

/**
 * Return the Array representation of an ArrayBuffer.
 * @param {ArrayBuffer} buffer - The ArrayBuffer to convert.
 * @returns {Array<number>} The Array representation.
 */
const buffer_to_array = (buffer) => {
	const output = [];
	const view = new Uint8Array(buffer);
	view.map((x) => output.push(x));
	return output;
};

/**
 * Return the hexadecimal representation of an ArrayBuffer.
 * @param {ArrayBuffer} buffer - The ArrayBuffer to convert.
 * @returns {string} The hexadecimal representation.
 */
const buffer_to_hex = (buffer) => {
	const array = new Uint8Array(buffer);
	const output = [];
	array.forEach((byte) => {
		output.push(byte.toString(16).padStart(2, '0'));
	});
	return output.join('');
};

/**
 * Return the Base64 representation of an ArrayBuffer.
 * @param {ArrayBuffer} buffer - The ArrayBuffer to convert.
 * @returns {string} The Base64 representation.
 */
const buffer_to_base64 = (buffer) => {
	return btoa(buffer_to_string(buffer));
};

/**
 * Return the string representation of an ArrayBuffer.
 * @param {ArrayBuffer} buffer - The ArrayBuffer to convert.
 * @param {string} [encoding=utf-8] - The encoding to use.
 * @returns {string} The string representation.
 */
const buffer_to_string = (buffer, encoding) => {
	return new TextDecoder(encoding || 'utf-8').decode(buffer);
};

/*
   ###    ########  ########     ###    ##    ##
  ## ##   ##     ## ##     ##   ## ##    ##  ##
 ##   ##  ##     ## ##     ##  ##   ##    ####
##     ## ########  ########  ##     ##    ##
######### ##   ##   ##   ##   #########    ##
##     ## ##    ##  ##    ##  ##     ##    ##
##     ## ##     ## ##     ## ##     ##    ##
*/

/**
 * Return the ArrayBuffer representation of an Array.
 * @param {Array<number>} array - The Array to convert.
 * @returns {ArrayBuffer} The ArrayBuffer representation.
 */
const array_to_buffer = (array) => {
	const output = new Uint8Array(array.length);
	for (let i = 0; i < output.byteLength; ++i) {
		output[i] = array[i];
	}
	return output.buffer;
};

/**
 * Return the hexadecimal representation of an Array.
 * @param {Array<number>} array - The Array to convert.
 * @returns {string} The hexadecimal representation.
 */
const array_to_hex = (array) => {
	return buffer_to_hex(array_to_buffer(array));
};

/**
 * Return the Base64 representation of an Array.
 * @param {Array<number>} array - The Array to convert.
 * @returns {string} The Base64 representation.
 */
const array_to_base64 = (array) => {
	return buffer_to_base64(array_to_buffer(array));
};

/**
 * Return the string representation of an Array.
 * @param {Array<number>} array - The Array to convert.
 * @returns {string} The string representation.
 */
const array_to_string = (array) => {
	return buffer_to_string(array_to_buffer(array));
};

/*
##     ## ######## ##     ##
##     ## ##        ##   ##
##     ## ##         ## ##
######### ######      ###
##     ## ##         ## ##
##     ## ##        ##   ##
##     ## ######## ##     ##
*/

/**
 * Return the ArrayBuffer representation of an hexadecimal string.
 * @param {string} hex - The hexadecimal string to convert.
 * @returns {ArrayBuffer} The ArrayBuffer representation.
 */
const hex_to_buffer = (hex) => {
	hex = hex.replace(/^0x/, '');
	const output = new Uint8Array(hex.length / 2);
	for (let i = 0; i < output.byteLength; ++i) {
		output[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
	}
	return output.buffer;
};

/**
 * Return the Array representation of an hexadecimal string.
 * @param {string} hex - The hexadecimal string to convert.
 * @returns {Array<number>} The Array representation.
 */
const hex_to_array = (hex) => {
	return buffer_to_array(hex_to_buffer(hex.replace(/^0x/, '')));
};

/**
 * Return the Base64 representation of an hexadecimal string.
 * @param {string} hex - The hexadecimal string to convert.
 * @returns {string} The Base64 representation.
 */
const hex_to_base64 = (hex) => {
	return buffer_to_base64(hex_to_buffer(hex.replace(/^0x/, '')));
};

/**
 * Return the string representation of an hexadecimal string.
 * @param {string} hex - The hexadecimal string to convert.
 * @returns {string} The string representation.
 */
const hex_to_string = (hex) => {
	return buffer_to_string(hex_to_buffer(hex.replace(/^0x/, '')));
};

/*
########     ###     ######  ########  #######  ##
##     ##   ## ##   ##    ## ##       ##     ## ##    ##
##     ##  ##   ##  ##       ##       ##        ##    ##
########  ##     ##  ######  ######   ########  ##    ##
##     ## #########       ## ##       ##     ## #########
##     ## ##     ## ##    ## ##       ##     ##       ##
########  ##     ##  ######  ########  #######        ##
*/

/**
 * Return the ArrayBuffer representation of a Base64 string.
 * @param {string} base64 - The Base64 string to convert.
 * @returns {ArrayBuffer} The ArrayBuffer representation.
 */
const base64_to_buffer = (base64) => {
	return string_to_buffer(base64_to_string(base64));
};

/**
 * Return the Array representation of a Base64 string.
 * @param {string} base64 - The Base64 string to convert.
 * @returns {Array} The Array representation.
 */
const base64_to_array = (base64) => {
	return string_to_array(base64_to_string(base64));
};

/**
 * Return the hexadecimal representation of a Base64 string.
 * @param {string} base64 - The Base64 string to convert.
 * @returns {string} The hexadecimal representation.
 */
const base64_to_hex = (base64) => {
	return string_to_hex(base64_to_string(base64));
};

/**
 * Return the string representation of a Base64 string.
 * @param {string} base64 - The Base64 string to convert.
 * @returns {string} The string representation.
 */
const base64_to_string = (base64) => {
	const decode = atob(base64).replace(/[\x80-\uffff]/g, (m) => `%${m.charCodeAt(0).toString(16).padStart(2, '0')}`);
	return decodeURIComponent(decode);
};

/*
 ######  ######## ########  #### ##    ##  ######
##    ##    ##    ##     ##  ##  ###   ## ##    ##
##          ##    ##     ##  ##  ####  ## ##
 ######     ##    ########   ##  ## ## ## ##   ####
      ##    ##    ##   ##    ##  ##  #### ##    ##
##    ##    ##    ##    ##   ##  ##   ### ##    ##
 ######     ##    ##     ## #### ##    ##  ######
*/

/**
 * Return the ArrayBuffer representation of a text string.
 * @param {string} string - The text string to convert.
 * @returns {ArrayBuffer} The ArrayBuffer representation.
 */
const string_to_buffer = (string) => {
	return new TextEncoder().encode(string).buffer;
};

/**
 * Return the Array representation of a text string.
 * @param {string} string - The text string to convert.
 * @returns {Array} The Array representation.
 */
const string_to_array = (string) => {
	return buffer_to_array(string_to_buffer(string));
};

/**
 * Return the hexadecimal representation of a text string.
 * @param {string} string - The text string to convert.
 * @returns {string} The hexadecimal representation.
 */
const string_to_hex = (string) => {
	return buffer_to_hex(string_to_buffer(string));
};

/**
 * Return the Base64 representation of a text string.
 * @param {string} string - The text string to convert.
 * @returns {string} The Base64 representation.
 */
const string_to_base64 = (string) => {
	const encode = encodeURIComponent(string).replace(/%([a-f0-9]{2})/gi, (m, $1) =>
		String.fromCharCode(parseInt($1, 16))
	);
	return btoa(encode);
};

/*
######## ##     ## ########   #######  ########  ########  ######
##        ##   ##  ##     ## ##     ## ##     ##    ##    ##    ##
##         ## ##   ##     ## ##     ## ##     ##    ##    ##
######      ###    ########  ##     ## ########     ##     ######
##         ## ##   ##        ##     ## ##   ##      ##          ##
##        ##   ##  ##        ##     ## ##    ##     ##    ##    ##
######## ##     ## ##         #######  ##     ##    ##     ######
*/

export default {
	dec_to_hex,
	hex_to_dec,

	buffer_to_array,
	buffer_to_hex,
	buffer_to_base64,
	buffer_to_string,

	array_to_buffer,
	array_to_hex,
	array_to_base64,
	array_to_string,

	hex_to_buffer,
	hex_to_array,
	hex_to_base64,
	hex_to_string,

	base64_to_buffer,
	base64_to_array,
	base64_to_hex,
	base64_to_string,

	string_to_buffer,
	string_to_array,
	string_to_hex,
	string_to_base64
};
