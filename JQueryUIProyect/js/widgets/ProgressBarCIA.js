var valorSuma = 33.3;
var carga = 0 - valorSuma;

function moverValorCarga() {
    sumar(valorSuma);
    $( function() {
        $( "#progressbar" ).progressbar({
            value: carga
        });
        $(".valor-carga").text(carga.toString() + '%');
    } );
}

function validateCP(number) {
    var re = /^\d{5}$/;
    return number.match(re);
}

function validateNumber(number) {
    var re = /^\d{9}$/;
    return number.match(re);
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function form1() {
    var f_nombre = $('#name').val();
    var f_apellidos = $('#apellidos').val();
    var f_telefono = $('#telefono').val();
    var f_email = $('#email').val();

    if (f_nombre === 0 || f_apellidos === 0 || f_telefono === 0 || f_email.length === 0){
        $(function () {
            $("#dialog1").dialog({
                autoOpen: false,
                show: {
                    effect: "slide",
                    duration: 500
                },
                hide: {
                    effect: "explode",
                    duration: 250
                },
                open: function(){
                    $("#content1").text('Tienes algun campo sin rellenar')
                }
            });

            $("#opener1").on("click", function () {
                $("#dialog1").dialog("open");
            });
        })
    } else {
        if (validateEmail(f_email) && validateNumber(f_telefono)) {
            $(function () {
                $("#dialog1").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content1").text('Primera parte completada')
                    }
                });

                $("#opener1").on("click", function () {
                    $("#dialog1").dialog("open");
                });
            });
            moverValorCarga();
            $('.form1').hide();
            $('.form1edit').show();
        } else if (!validateNumber(f_telefono)){
            $(function () {
                $("#dialog1").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content1").text('El telefono esta mal')
                    }
                });

                $("#opener1").on("click", function () {
                    $("#dialog1").dialog("open");
                });
            })
        } else if ( !validateEmail(f_email)){
            $(function () {
                $("#dialog1").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content1").text('El email no es correcto')
                    }
                });

                $("#opener1").on("click", function () {
                    $("#dialog1").dialog("open");
                });
            })
        } else {
            $(function () {
                $("#dialog1").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content1").text('Algo esta fallando')
                    }
                });

                $("#opener1").on("click", function () {
                    $("#dialog1").dialog("open");
                });
            })
        }
    }
}

function form2() {
    var f_comunidad = $('#comunidad').val();
    var f_Municipio = $('#Municipio').val();
    var f_CP = $('#CP').val();
    var f_direccion = $('#direccion').val();

    if (f_comunidad === 0 || f_Municipio === 0 || f_CP === 0 || f_direccion.length === 0){
        $(function () {
            $("#dialog2").dialog({
                autoOpen: false,
                show: {
                    effect: "slide",
                    duration: 500
                },
                hide: {
                    effect: "explode",
                    duration: 250
                },
                open: function(){
                    $("#content2").text('Hay algun campo sin rellenar')
                }
            });

            $("#opener2").on("click", function () {
                $("#dialog2").dialog("open");
            });
        })
    } else {
        if (validateCP(f_CP)){
            $(function () {
                $("#dialog2").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content2").text('Segunda parte completada')
                    }
                });

                $("#opener2").on("click", function () {
                    $("#dialog2").dialog("open");
                });
            });
            moverValorCarga();
            $('.form2').hide();
            $('.form2edit').show();
        } else {
            $(function () {
                $("#dialog2").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content2").text('Mal el CP')
                    }
                });

                $("#opener2").on("click", function () {
                    $("#dialog2").dialog("open");
                });
            })
        }

    }
}

function form3() {
    var cantidad = $('#spinner').val();
    var datapicker1 = $('#datepicker').val();
    var datapicker2 = $('#datepicker1').val();

    console.log(cantidad);
    if (cantidad === '' || datapicker1 === '' || datapicker2 === ''){
        $(function () {
            $("#dialog3").dialog({
                autoOpen: false,
                show: {
                    effect: "slide",
                    duration: 500
                },
                hide: {
                    effect: "explode",
                    duration: 250
                },
                open: function(){
                    $("#content3").text('Hay campos sin rellenar')
                }
            });

            $("#opener3").on("click", function () {
                $("#dialog3").dialog("open");
            });
        })
    } else {
        $(function () {
            $("#dialog3").dialog({
                autoOpen: false,
                show: {
                    effect: "slide",
                    duration: 500
                },
                hide: {
                    effect: "explode",
                    duration: 250
                },
                open: function(){
                    $("#content3").text('Tercera parte completada')
                }
            });

            $("#opener3").on("click", function () {
                $("#dialog3").dialog("open");
            });
        });
        moverValorCarga();
        $('.form3').hide();
        $('.form3edit').show();
    }
}

function esconderf1(){
    $('.form1edit').hide();
}

function esconderf2() {
    $('.form2edit').hide();
}

function esconderf3() {
    $('.form3edit').hide();
}

function form1edit() {
    var f_nombre = $('#name').val();
    var f_apellidos = $('#apellidos').val();
    var f_telefono = $('#telefono').val();
    var f_email = $('#email').val();

    if (f_nombre === 0 || f_apellidos === 0 || f_telefono === 0 || f_email.length === 0){
        $(function () {
            $("#dialog1").dialog({
                autoOpen: false,
                show: {
                    effect: "slide",
                    duration: 500
                },
                hide: {
                    effect: "explode",
                    duration: 250
                },
                open: function(){
                    $("#content1").text('Tienes algun campo sin rellenar')
                }
            });

            $("#opener1edit").on("click", function () {
                $("#dialog1").dialog("open");
            });
        })
    } else {
        if (validateEmail(f_email) && validateNumber(f_telefono)) {
            $(function () {
                $("#dialog1").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content1").text('Se han guardado los cambios')
                    }
                });

                $("#opener1edit").on("click", function () {
                    $("#dialog1").dialog("open");
                });
            })
        } else if (!validateNumber(f_telefono)){
            $(function () {
                $("#dialog1").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content1").text('El telefono no es correcto')
                    }
                });

                $("#opener1edit").on("click", function () {
                    $("#dialog1").dialog("open");
                });
            })
        } else if ( !validateEmail(f_email)){
            $(function () {
                $("#dialog1").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content1").text('El email no es correcto')
                    }
                });

                $("#opener1edit").on("click", function () {
                    $("#dialog1").dialog("open");
                });
            })
        } else {
            $(function () {
                $("#dialog1").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content1").text('Algo esta fallando')
                    }
                });

                $("#opener1edit").on("click", function () {
                    $("#dialog1").dialog("open");
                });
            })
        }
    }
}

function form2edit() {
    var f_comunidad = $('#comunidad').val();
    var f_Municipio = $('#Municipio').val();
    var f_CP = $('#CP').val();
    var f_direccion = $('#direccion').val();

    if (f_comunidad === 0 || f_Municipio === 0 || f_CP === 0 || f_direccion.length === 0){
        $(function () {
            $("#dialog2").dialog({
                autoOpen: false,
                show: {
                    effect: "slide",
                    duration: 500
                },
                hide: {
                    effect: "explode",
                    duration: 250
                },
                open: function(){
                    $("#content2").text('Hay algun campo sin rellenar')
                }
            });

            $("#opener2edit").on("click", function () {
                $("#dialog2").dialog("open");
            });
        })
    } else {
        if (validateCP(f_CP)){
            $(function () {
                $("#dialog2").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content2").text('Se han guardado los cambios')
                    }
                });

                $("#opener2edit").on("click", function () {
                    $("#dialog2").dialog("open");
                });
            })
        } else {
            $(function () {
                $("#dialog2").dialog({
                    autoOpen: false,
                    show: {
                        effect: "slide",
                        duration: 500
                    },
                    hide: {
                        effect: "explode",
                        duration: 250
                    },
                    open: function(){
                        $("#content2").text('Mal el CP')
                    }
                });

                $("#opener2edit").on("click", function () {
                    $("#dialog2").dialog("open");
                });
            })
        }
    }
}

function form3edit() {
    var cantidad = $('#spinner').val();
    var datapicker1 = $('#datepicker').val();
    var datapicker2 = $('#datepicker1').val();

    console.log(cantidad);
    if (cantidad === '' || datapicker1 === '' || datapicker2 === ''){
        $(function () {
            $("#dialog3").dialog({
                autoOpen: false,
                show: {
                    effect: "slide",
                    duration: 500
                },
                hide: {
                    effect: "explode",
                    duration: 250
                },
                open: function(){
                    $("#content3").text('Hay campos sin rellenar')
                }
            });

            $("#opener3edit").on("click", function () {
                $("#dialog3").dialog("open");
            });
        })
    } else {
        $(function () {
            $("#dialog3").dialog({
                autoOpen: false,
                show: {
                    effect: "slide",
                    duration: 500
                },
                hide: {
                    effect: "explode",
                    duration: 250
                },
                open: function(){
                    $("#content3").text('Se han guardado los cambios')
                }
            });

            $("#opener3edit").on("click", function () {
                $("#dialog3").dialog("open");
            });
        })
    }
}

function sumar(suma) {
    carga = carga + suma;
    if (carga > 90){ carga = 100}
}

function enviaTodo() {
    (carga === 100) ? $(function () {
        $("#dialogAll").dialog({
            autoOpen: false,
            show: {
                effect: "slide",
                duration: 500
            },
            hide: {
                effect: "explode",
                duration: 250
            },
            open: function(){
                $("#contentHolderAll").text('Formulario enviado')
            }
        });

        $("#openerAll").on("click", function () {
            $("#dialogAll").dialog("open");
        });
    }) :  $(function () {
        $("#dialogAll").dialog({
            autoOpen: false,
            show: {
                effect: "slide",
                duration: 500
            },
            hide: {
                effect: "explode",
                duration: 250
            },
            open: function(){
                $("#contentHolderAll").text('Algo falla')
            }
        });

        $("#openerAll").on("click", function () {
            $("#dialogAll").dialog("open");
        });
    })
}

moverValorCarga();
esconderf1();
esconderf2();
esconderf3();