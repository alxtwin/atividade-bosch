$(document).ready(()=>{
    $.each(postsDefaults,(i,v)=>{
        $('.body-feed .body-scroll').append(createPost(v));
    });

    $('body').on('click', '.btn-post', function (e) {
        let inputs = $(this).closest('.drop-panel').find('[id]');
        let aux = {};

        $.each(inputs,(i,el)=>{
            let id = $(el).attr('id');
            switch (id) {
                case 'nameUser':
                    if($(el).val().length == 0)
                        alert('O campo nome é obrigatório!')
                    else aux[id] = $(el).val();
                break;
                case 'qtdComentarios':
                    aux[id] = $(el).val() + ' comentários';
                break;
                case 'qtdCompartilhamentos':
                    aux[id] = $(el).val() + ' compartilhamentos';
                break;
                default:
                    aux[id] = $(el).val();
                break;
            }
            $(el).val('');
        });
        $(this).closest('.drop-panel-show').removeClass('drop-panel-show');
        $('.body-feed .body-scroll').prepend(createPost(aux));
    });

    $('body').on('click', '#btnCreatePost', function (e) {
        if($(e.target).closest('.drop-panel').length == 0){
            if($(this).hasClass('drop-panel-show'))
                $(this).removeClass('drop-panel-show');
            else $(this).addClass('drop-panel-show');
        }
    });
});

function createPost(data) {
    let aux = {
        imgUser: ( data.imgUser ? data.imgUser : '../img/not_foto_user.png' ),
        nameUser: ( data.nameUser ? data.nameUser : 'Sem nome!' ),
        timePost: ( data.timePost ? data.timePost : '1d' ),
        qtdCurtidas: ( data.qtdCurtidas ? data.qtdCurtidas : '0' ),
        qtdComentarios: ( data.qtdComentarios ? data.qtdComentarios : '0' ),
        qtdCompartilhamentos: ( data.qtdCompartilhamentos ? data.qtdCompartilhamentos : '0' ),
        textPost: ( data.textPost ? data.textPost : false ),
        imgPost: ( data.imgPost ? data.imgPost : false ),
    }
    let html = $('<div>',{class:'post-card'});
    //header
    html.append(
        $('<div>',{class:'card-header'})
        .append(
            $('<div>',{class:'header-card-left'})
            .append(
                $('<div>',{class:'card-foto-user'})
                .append( $('<img>',{src:aux.imgUser}) )
                .append( 
                    $('<div>',{class:'tooltip-image-maior'})
                    .append( $('<img>',{src:aux.imgUser}) )
                )
            )
            .append(
                $('<div>',{class:'card-info-user'})
                .append(
                    $('<div>',{class:'info-user-nome', text:aux.nameUser})
                )
                .append(
                    $('<div>',{class:'info-user-extra'})
                    .append( $('<div>',{class:'extra-period', text:aux.timePost}) )
                    .append( $('<div>',{class:'extra-separador'}) )
                    .append(
                        $('<div>',{class:'extra-icone'})
                        .append( $('<i>',{class:'fa fa-users'}) )
                    )
                )
            )
        )
        .append(
            $('<div>',{class:'header-card-right'})
            .append(
                $('<i>',{class:'far fa-times-circle'})
                .on('click', function () {
                    $(this).closest('.post-card').remove();
                })
            )
        )
    );

    //body
    let body = $('<div>',{class:'card-body'});
    if(aux.textPost)
        body.append( $('<div>',{class:'body-card-row', text:aux.textPost}) )
    if(aux.imgPost){
        body.append(
            $('<div>',{class:'body-card-row row-img'})
            .append( $('<img>',{src:aux.imgPost}) )
        );
    }
    if(!aux.textPost && !aux.imgPost)
        body.append( $('<div>',{class:'body-card-row', text:'Sem texto!'}) )

    html.append(body);

    //footer
    html.append(
        $('<div>',{class:'card-footer'})
        .append(
            $('<div>',{class:'footer-card-row'})
            .append(
                $('<div>',{class:'footer-card-left'})
                .append(
                    $('<div>',{class:'footer-card-curtidas'})
                    .append( $('<i>',{class:'far fa-thumbs-up'}) )
                    .append( $('<div>',{class:'curtidas-qtd',text:aux.qtdCurtidas}) )
                )
            )
            .append(
                $('<div>',{class:'footer-card-right'})
                .append(
                    $('<div>',{class:'footer-card-comentarios'})
                    .append( $('<div>',{class:'comentarios-qtd',text:aux.qtdComentarios}) )
                    .append( $('<div>',{class:'comentarios-text',text:'comentários'}) )
                )
                .append( $('<div>',{class:'extra-separador'}) )
                .append(
                    $('<div>',{class:'footer-card-compartilhamentos'})
                    .append( $('<div>',{class:'compartilhamentos-qtd',text:aux.qtdCompartilhamentos}) )
                    .append( $('<div>',{class:'compartilhamentos-text',text:'compartilhamentos'}) )
                )
            )
        )
        .append(
            $('<div>',{class:'footer-card-row'})
            .append(
                $('<div>',{class:'btn-card-actions'})
                .append( $('<i>',{class:'far fa-thumbs-up'}) )
                .append( $('<div>',{class:'text-btn-car', text:'Curtir'}) )
                .on('click', function () {
                    let element = $(this).closest('.card-footer').find('.footer-card-curtidas .curtidas-qtd');
                    let aux = Number(element.text());
                    element.text((aux + 1));
                })
            )
            .append(
                $('<div>',{class:'btn-card-actions'})
                .append( $('<i>',{class:'far fa-comment'}) )
                .append( $('<div>',{class:'text-btn-car', text:'Comentar'}) )
                .on('click', function () {
                    let element = $(this).closest('.card-footer').find('.footer-card-comentarios .comentarios-qtd');
                    let aux = Number(element.text());
                    element.text((aux + 1));
                })
            )
            .append(
                $('<div>',{class:'btn-card-actions'})
                .append( $('<i>',{class:'fa fa-share'}) )
                .append( $('<div>',{class:'text-btn-car', text:'Compartilhar'}) )
                .on('click', function () {
                    let element = $(this).closest('.card-footer').find('.footer-card-compartilhamentos .compartilhamentos-qtd');
                    let aux = Number(element.text());
                    element.text((aux + 1));
                })
            )
        )
    );
    return html;
};
