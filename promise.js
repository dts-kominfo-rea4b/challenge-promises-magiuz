const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (parameter) => {
  try {
    const isiTheaterIXX = await promiseTheaterIXX();
    const isiTheaterVGC = await promiseTheaterVGC();
    const isi = isiTheaterIXX.concat(isiTheaterVGC);
    let length = isi.length;
    let result = 0;

    for (x = 0; x < length; x++) {
      if (isi[x]["hasil"] == parameter) result++;
    }
    return result;
  } catch (pesan) {
    console.log(pesan);
  }
};

module.exports = {
  promiseOutput,
};
