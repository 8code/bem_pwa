const util = {
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
              var since='< 1 menit';
            else
              var since='1 menit';
        }
        else if(sinceMin<45)
            var since=sinceMin+' menit';
        else if(sinceMin>44&&sinceMin<60)
            var since='< 1 jam';
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