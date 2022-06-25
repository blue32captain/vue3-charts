const getCandleProps = () => {
  const multiData = {
    names: ["11234", "21234", "31234", "41234", "51234", "61234", "71234", "81234", "91234", "101234", "111234", "121234", "131234", "141234", "151234", "161234", "171234", "181234", "191234", "201234"],
    candles: [
      [ 4239.4,4239.6,4079.6,4079.63478779,2993.45281556 ],
      [ 4082.2,4082.2,4020.2,4033.5,3216.95571165 ],
      [ 4035.6,4072.78348726,3965,4055.6,2157.50135341 ],
      [ 4055.6,4100,4035,4059.1719252,1660.6115119 ],
      [ 4059.1,4076.6,4014.1,4060,1070.09946267 ],
      [ 4060.5,4060.5,3987.2,4049.2,1530.46774287 ],
      [ 4049.2,4092.7,4035,4089.6691106,922.84509291 ],
      [ 4089.9,4098.6,4060,4073.2,793.81081878 ],
      [ 4073.7,4084.3,4045.3,4049.7,382.60686566 ],
      [ 4049.9,4074.5,4041,4042.1554296,587.91082169 ],
      [ 4042.1,4058.2,4025,4031.3,399.88361961 ],
      [ 4031.3,4054.8,3953.5,4005,1462.60523159 ],
      [ 4005,4026.5,3953.6,4022.7,818.53015592 ],
      [ 4022.8,4065,4018.9,4039.5,971.06384284 ],
      [ 4038.5,4065,4010.1,4052,726.79477438 ],
      [ 4052.1,4070.8,4040.1,4045,495.99207452 ],
      [ 4045,4045.9,4014.5,4014.6,487.14701364 ],
      [ 4014.6,4041.7,4005.6,4031.8,505.30648465 ],
      [ 4032,4032,3986.1,4008.8,792.52103654 ],
      [ 4008.8,4017.1,3975.8,4003.7,489.94574863 ],
      [ 4003.7,4017.2,3964.5,3991.7,1004.91928605 ],
      [ 3992.6,4010,3980.1,4009.3,297.78849893 ],
      [ 4009.3,4061.9,4007.4,4025.2,498.21371364 ],
      [ 4025,4056.9,4023.6,4047,373.52977661 ],
      [ 4046.9,4208,4038.6,4191.9,2589.49296961 ],
      [ 4192,4233.5,4182.2,4200,1875.67597075 ],
      [ 4200,4268.3,4199.9,4216.6,1197.42649634 ],
      [ 4216.7,4260.7,4208.5,4216.1,1067.10928935 ],
      [ 4214.9,4257.6,4205,4247.3,970.81717333 ],
      [ 4247.3,4264.4,4230,4263.9,869.00302097 ],
      [ 4263,4340,4263,4313.4,1458.724505 ],
      [ 4313.45032324,4323,4279,4294.8,605.54031094 ],
      [ 4294.8,4316.8,4281,4283.3,296.35156264 ],
      [ 4283.4,4331,4283.3,4318.4,546.91950818 ],
      [ 4318.7,4322.9,4234.9,4255,2301.94395118 ],
      [ 4254.7,4277.3,4240,4267.1,544.10378579 ],
      [ 4268.5,4291.9,4258.6,4275,306.78709903 ],
      [ 4274.8,4276.7,4235.6,4241.3,319.77521941 ],
      [ 4241.35765523,4296.5,4235.6,4273.4,384.67632057 ],
      [ 4274.5,4350,4266.48257249,4341.17827247,579.52257857 ],
      [ 4341.1,4369.1,4308.8,4323.3,659.05361697 ],
      [ 4322.7,4325.3,4220.4,4253.2,1230.47386922 ],
      [ 4252.3,4260.6,4235,4235.1,235.10213013 ],
      [ 4235.1,4235.2,4165,4193.7,698.23039778 ],
      [ 4190.1,4210,4163.7,4196.2,389.84651675 ],
      [ 4196.1,4233.3,4171.7,4203.89662994,787.53885139 ],
      [ 4204,4230,4185.4,4211.3,512.35203443 ],
      [ 4211.4,4270.47837819,4211.4,4229.2,808.71129495 ],
      [ 4229,4229,4122.3,4149.3,1229.46420708 ],
      [ 4149.3,4176.2,4113,4160.1,702.29956492 ],
      [ 4160.09778767,4207,4145.1,4188.1,866.41749279 ],
      [ 4188.1,4199.3,4139.7,4167.5,539.18021874 ],
      [ 4167.6,4234.2,4159.6,4210.1,930.73670509 ],
      [ 4210.3,4230,4168.8,4201.51994857,1493.60843424 ],
      [ 4200.3,4220.8,4188.2,4212.9,409.36591196 ],
      [ 4213,4222.4,4150.5,4189.5,1003.35518909 ],
      [ 4189.5717225,4205,4171,4191.3,337.61788432 ],
      [ 4190.8,4218.9,4171,4203,600.39244712 ],
      [ 4204.00980524,4273.7794425,4195.7,4257.2,1042.17505464 ],
      [ 4257.2,4286.2,4234.1,4245.1,938.5754305 ],
      [ 4241.6,4251.92560914,4181.6,4211.2,565.90592326 ],
      [ 4211.26001075,4232.4,4131.9,4173,1404.34736566 ],
      [ 4172.9457484,4189.8,4134.9,4160.4,716.383818 ],
      [ 4160.00489323,4189.7,4137.1,4170.3,613.35612696 ],
      [ 4170.3,4170.3,3980,4008,2425.56560355 ],
      [ 4008,4050,3997.3,4041.4,1316.04289045 ],
      [ 4041.3,4066.0881363,4018.1,4056,966.0790019 ],
      [ 4055.9,4060,4030,4039.6,566.85564172 ],
      [ 4039.3,4040.2,4010,4032.6,1210.53321355 ],
      [ 4032.8354586,4043.5,4013.5,4040.7,581.58386494 ],
      [ 4040.7,4076.2,3990.2,4068.2,1170.53061556 ],
      [ 4068.2,4068.21475019,4036.3,4039.8,802.15962768 ],
      [ 4039.8,4068.58323533,4037.3,4058.1,759.70299229 ],
      [ 4055.2,4055.8,4025,4039.32123707,625.25323748 ],
      [ 4039.32123707,4088.8,4031.7,4065.7,697.95851746 ],
      [ 4065.7,4065.8,4025.2,4047.3,1009.51396779 ],
      [ 4047.3,4059.3,3999,4000,1084.60114835 ],
      [ 4008.5,4008.5,3859,3895.1,2968.42880522 ],
      [ 3895.1,3905,3830.1,3899.4,2312.57598183 ],
      [ 3898.4,3911.3,3879.8,3907.8,991.03830759 ],
      [ 3908.9,3932.9,3888.1,3908.7,446.34731705 ],
      [ 3907.70015618,3913,3878.4,3882.6,462.73475711 ],
      [ 3882.7,3920,3860,3913.1,1247.97521199 ],
      [ 3914.1,3942,3899.9,3941.3,528.29918782 ],
      [ 3941.9,3948,3907.8,3912.7,683.03060297 ],
      [ 3912.8,3935.5,3897.2,3901.2,637.58782887 ],
      [ 3903,3937.1,3854,3919.9,1196.23535325 ],
      [ 3919.8,3948,3919,3930,327.29200269 ],
      [ 3930,3930.7,3898.9,3900.7,277.23603127 ],
      [ 3901.52958624,3909,3830.4,3879.9,1713.2178483 ],
      [ 3869.9,3894.5,3855.2,3877.9,833.90073931 ],
      [ 3878,3890.71237625,3810,3830.4,1332.11593102 ],
      [ 3830.4,4059.8,3789.74787984,4010.6,2846.95522104 ],
      [ 4013.2,4057.1,4010,4051.9,1507.55670112 ],
      [ 4053.6,4067.2,4018.8,4021,574.08922469 ],
      [ 4020.97243468,4047.70185841,4020.9,4040.1,397.62407971 ],
      [ 4040,4074.9,4001.1,4007.9632164,973.2082731 ],
      [ 4008,4036.16208177,4001.6,4035.3,732.48635914 ],
      [ 4035.3,4037,4011.5,4019.9,1273.90934337 ],
      [ 4019.8,4062.3,4010.6,4033,533.56747543 ],
      [ 4033,4088.12156911,4033,4084.3,1875.56031861 ],
      [ 4085,4134.8,4043.2,4061.1212328,2107.22326949 ],
      [ 4061.1,4061.1212328,4001.5,4022.5,1216.85086812 ],
      [ 4022.5,4022.5,3960.1,3976.02046196,1208.45259904 ],
      [ 3976.9,3996.3624133,3955.1,3988.9,865.8040247 ],
      [ 3989.99466018,4002,3978.2,3980,389.91471461 ],
      [ 3979.9,3986.41407154,3929.7,3939.4,921.63714483 ],
      [ 3939.43174001,3989.5,3921.96449113,3969,484.3418282 ],
      [ 3968.9,3981.48935925,3937.54467418,3973.5,383.40232935 ],
      [ 3969.2,3987.4,3949.8,3981.9,416.37698721 ],
      [ 3982.2,4000.77105811,3974.3,3982.96771355,495.47716788 ],
      [ 3982.3,3988.9,3934.36674664,3957.7,522.3369626 ],
      [ 3956.5,3956.5,3894.2,3928.2,1007.65488953 ],
      [ 3928.2,3929.5,3898.9,3911.3,495.81936131 ],
      [ 3911.4,3912.5,3877.8,3900.9,617.98432122 ],
      [ 3900.8,3940,3885.311804,3925.8,523.02315155 ],
      [ 3925.7,3933.8,3905.8,3921.1,605.24104547 ],
      [ 3922.3,3928.8,3832.1,3859.4,2690.12372546 ],
      [ 3859.2,3891.4,3841,3879.4,730.38015141 ],
      [ 3879.31914128,3905,3864.2,3901.1,340.09717927 ],
      [ 3901,3930,3897.90340588,3902.5,797.32320544 ],
      [ 3902.5,3941.7,3878.7,3940.0700736,1040.60730877 ],
      [ 3940.0700736,3948.6,3917.76575619,3925,692.28560428 ],
      [ 3925.02142354,3944.1,3909.7,3913.8,190.06200431 ],
      [ 3914,3917,3856.8,3880.5,667.65394725 ],
      [ 3880.52940727,3907.7,3880.5,3897.3,356.28213015 ],
      [ 3897.9,3897.9,3750.3,3772.1,1437.34607792 ],
      [ 3768.5,3802.5,3750,3787.9,2188.98452749 ],
      [ 3787.9,3823.3,3770.7,3802,973.32946464 ],
      [ 3802,3816.4,3772.6,3774.3,1259.54630486 ],
      [ 3774.9,3812.4,3771,3812.4,649.5418292 ],
      [ 3812.96235816,3834.3,3794.9,3799,891.85697803 ],
      [ 3798.9,3801.8,3777.37861572,3780,545.76340914 ],
      [ 3779.9399115,3823.2,3757.9,3772.9,802.61875165 ],
      [ 3771.4,3817,3768.9,3799.5,554.12796407 ],
      [ 3799.5,3830.32820239,3792.9567208,3803.9,1820.90647083 ],
      [ 3803.9,3810,3752,3756.5,1315.89828124 ],
      [ 3756.7,3802.6,3739.7,3791,1820.58021568 ],
      [ 3790.8,3799.51120195,3755,3758,426.96704844 ],
      [ 3758,3922.7,3732.47866655,3889.1820334,1552.68773102 ],
      [ 3889.1,3913.8,3875,3888.7,943.11726857 ],
      [ 3888.7,3892,3866.9900976,3879.9,1386.80008331 ],
      [ 3879.9,3900.2,3879.9,3887.1,410.10106772 ],
      [ 3886.8,3920.1,3881,3889.6,902.18056478 ],
      [ 3889.6,3893,3827.7,3839.9,1283.37186497 ],
      [ 3839.6,3849.5,3827.3,3847.1,751.64279964 ],
      [ 3847,3848,3783,3797.5,958.84894751 ],
      [ 3797.5,3800.1,3741.5,3758,1691.04036138 ],
      [ 3758.5,3809.4,3647.13249139,3785.4,3285.20850768 ],
      [ 3785.7,3808.6,3667.6,3727.5,2286.65098234 ],
      [ 3727.5,3750,3657.6,3703.4,2251.43954019 ],
    ]
  };

  const candleChartData = {
    labels: multiData.names,
    datasets: [{
      "values": multiData.candles,
      "formatted": (multiData.candles.map(val => val[0])).map(function (d) {
        return d * 1000 + " km";
      })
    }],
    yMarkers: [
      {
        label: Math.max(...multiData.candles.map(val => val[1])).toFixed(2).toString(),
        value: Math.max(...multiData.candles.map(val => val[1])),
        options: {
          labelPos: "right"
        }
      }
    ],
  };

  return {
    title: 'Candle Vue3 (charts) Chart',
    data: candleChartData,
    type: 'candle',
    height: 500,
    colors: ['grey'],
    isNavigable: 1,
    xUnit: 4,
  };
}

export {
  getCandleProps,
}
