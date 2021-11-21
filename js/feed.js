$(document).ready(()=>{
    $.each(postsDefaults,(i,v)=>{
        $('.body-feed .body-scroll').append(createPost(v));
    });
});

function createPost(data) {
    let aux = {
        imgUser: ( data.imgUser ? data.imgUser : '../img/not_foto_user.png' ),
        nameUser: ( data.nameUser ? data.nameUser : 'Sem nome!' ),
        timePost: ( data.timePost ? data.timePost : '1d' ),
        qtdCurtidas: ( data.qtdCurtidas ? data.qtdCurtidas : '0' ),
        qtdComentarios: ( data.qtdComentarios ? data.qtdComentarios : '0 comentários' ),
        qtdCompartilhamentos: ( data.qtdCompartilhamentos ? data.qtdCompartilhamentos : '0 compartilhamentos' ),
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
    html.append(
        $('<div>',{class:'card-body'})
        .append( $('<div>',{class:'body-card-row'}) )
        .append( $('<div>',{class:'body-card-row'}) )
    );
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
                    .append( aux.qtdCurtidas )
                )
            )
            .append(
                $('<div>',{class:'footer-card-right'})
                .append( $('<div>',{class:'footer-card-comentarios', text:aux.qtdComentarios}) )
                .append( $('<div>',{class:'extra-separador'}) )
                .append( $('<div>',{class:'footer-card-compartilhamentos', text:aux.qtdCompartilhamentos}) )
            )
        )
        .append(
            $('<div>',{class:'footer-card-row'})
            .append(
                $('<div>',{class:'btn-card-actions'})
                .append( $('<i>',{class:'far fa-thumbs-up'}) )
                .append( $('<div>',{class:'text-btn-car', text:'Curtir'}) )
            )
            .append(
                $('<div>',{class:'btn-card-actions'})
                .append( $('<i>',{class:'far fa-comment'}) )
                .append( $('<div>',{class:'text-btn-car', text:'Comentar'}) )
            )
            .append(
                $('<div>',{class:'btn-card-actions'})
                .append( $('<i>',{class:'fa fa-share'}) )
                .append( $('<div>',{class:'text-btn-car', text:'Compartilhar'}) )
            )
        )
    );
    return html;
};

/* 
<div class="post-card">
    <div class="card-header">
        <div class="header-card-left">
            <div class="card-foto-user">
                <img src="../img/not_foto_user.png">
                <div class="tooltip-image-maior">
                    <img src="../img/not_foto_user.png">
                </div>
            </div>
            <div class="card-info-user">
                <div class="info-user-nome">Diego de Freitas</div>
                <div class="info-user-extra">
                    <div class="extra-period"> 1d </div>
                    <div class="extra-separador"></div>
                    <div class="extra-icone">
                        <i class="fa fa-users"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-card-right">
            <i class="far fa-times-circle"></i>
        </div>
    </div>
    <div class="card-body">
        <div class="body-card-row"></div>
        <div class="body-card-row"></div>
    </div>
    <div class="card-footer">
        <div class="footer-card-row">
            <div class="footer-card-left">
                <div class="footer-card-curtidas">
                    <i class="far fa-thumbs-up"></i>
                    336
                </div>
            </div>
            <div class="footer-card-right">
                <div class="footer-card-comentarios">
                    45 comentários
                </div>
                <div class="extra-separador"></div>
                <div class="footer-card-compartilhamentos">
                    102 compartilhamentos
                </div>
            </div>
        </div>
        <div class="footer-card-row">
            <div class="btn-card-actions">
                <i class="far fa-thumbs-up"></i>
                <div class="text-btn-car">Curtir</div>
            </div>
            <div class="btn-card-actions">
                <i class="far fa-comment"></i>
                <div class="text-btn-car">Comentar</div>
            </div>
            <div class="btn-card-actions">
                <i class="fa fa-share"></i>
                <div class="text-btn-car">Compartilhar</div>
            </div>
        </div>
    </div>
</div>
*/