const util = {
    dateIndo(data){
      var date = new Date(data);
      var tahun = date.getFullYear();
      var bulan = date.getMonth();
      var tanggal = date.getDate();
      var hari = date.getDay();
      // var jam = date.getHours();
      // var menit = date.getMinutes();
      // var detik = date.getSeconds();
      switch(hari) {
      case 0: hari = "Minggu"; break;
      case 1: hari = "Senin"; break;
      case 2: hari = "Selasa"; break;
      case 3: hari = "Rabu"; break;
      case 4: hari = "Kamis"; break;
      case 5: hari = "Jum'at"; break;
      case 6: hari = "Sabtu"; break;
      }
      switch(bulan) {
      case 0: bulan = "Januari"; break;
      case 1: bulan = "Februari"; break;
      case 2: bulan = "Maret"; break;
      case 3: bulan = "April"; break;
      case 4: bulan = "Mei"; break;
      case 5: bulan = "Juni"; break;
      case 6: bulan = "Juli"; break;
      case 7: bulan = "Agustus"; break;
      case 8: bulan = "September"; break;
      case 9: bulan = "Oktober"; break;
      case 10: bulan = "November"; break;
      case 11: bulan = "Desember"; break;
      }
      var tampilTanggal = hari + ", " + tanggal + " " + bulan + " " + tahun;
      // var tampilWaktu = "Jam: " + jam + ":" + menit + ":" + detik;
      return tampilTanggal;
      // console.log(tampilWaktu);
    },
    dateTimeIndo(data){
      var date = new Date(data);
      var tahun = date.getFullYear();
      var bulan = date.getMonth();
      var tanggal = date.getDate();
      var hari = date.getDay();
      var jam = date.getHours();
      var menit = date.getMinutes();
      var detik = date.getSeconds();
      switch(hari) {
      case 0: hari = "Minggu"; break;
      case 1: hari = "Senin"; break;
      case 2: hari = "Selasa"; break;
      case 3: hari = "Rabu"; break;
      case 4: hari = "Kamis"; break;
      case 5: hari = "Jum'at"; break;
      case 6: hari = "Sabtu"; break;
      }
      switch(bulan) {
      case 0: bulan = "Januari"; break;
      case 1: bulan = "Februari"; break;
      case 2: bulan = "Maret"; break;
      case 3: bulan = "April"; break;
      case 4: bulan = "Mei"; break;
      case 5: bulan = "Juni"; break;
      case 6: bulan = "Juli"; break;
      case 7: bulan = "Agustus"; break;
      case 8: bulan = "September"; break;
      case 9: bulan = "Oktober"; break;
      case 10: bulan = "November"; break;
      case 11: bulan = "Desember"; break;
      }
      var tampilTanggal = hari + ", " + tanggal + " " + bulan + " " + tahun;
      var tampilWaktu = " - Jam: " + jam + ":" + menit + ":" + detik;
      return tampilTanggal + tampilWaktu;
      // console.log(tampilWaktu);
    },
    parseQuestDate(datetime) {

        var tTime=new Date(datetime);
        var cTime=new Date();
        var sinceMin=Math.round((cTime-tTime)/60000);
        if(sinceMin==0)
        {
            var sinceSec=Math.round((cTime-tTime)/1000);
            if(sinceSec<10)
              var since='baru saja';
            else if(sinceSec<20)
              var since='20 detik';
            else
              var since='30 detik';
        }
        else if(sinceMin==1)
        {
            var sinceSec=Math.round((cTime-tTime)/1000);
            if(sinceSec==30)
              var since='30 detik';
            else if(sinceSec<60)
              var since='1 menit';
            else
              var since='1 menit';
        }
        else if(sinceMin<45)
            var since=sinceMin+' menit';
        else if(sinceMin>44&&sinceMin<60)
            var since='1 jam';
        else if(sinceMin<1440){
            var sinceHr=Math.round(sinceMin/60);
        if(sinceHr==1)
          var since=' 1 jam';
        else
          var since=''+sinceHr+' jam';
        }
        else if(sinceMin>1439&&sinceMin<2880)
            var since='1 hari';
        else
        {
            var sinceDay=Math.round(sinceMin/1440);
            var since=sinceDay+' hari';
        }
        return since;
        }
}

export default util