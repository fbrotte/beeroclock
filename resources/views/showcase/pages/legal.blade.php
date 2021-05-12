@extends('layouts.showcase')
@section('title', 'Beer\'o Clock')
@section('slogan', '')
@section('content')

<div id="legal" style="margin: 30px; margin-bottom: 100px; color: white; z-index: 11;">
    <h1>Données personnelles</h1>

    
    <p>Une partie de ces données est utilisée pour l’élaboration de statistiques anonymes</p>
    
    <a id="camera"></a>
    <h4>Consentement à l’utilisation de la caméra</h4>
    <p>L'application requiert votre consentement à l’utilisation de la caméra de votre téléphone mobile, dès lors que vous souhaitez scanner un QR Code au sein de l’application TousAntiCovid. Ce consentement se matérialisera lorsque vous souhaiterez utiliser pour la première fois cette fonctionnalité de lecture de QR Codes au sein de l’application TousAntiCovid en affichant une boite de dialogue vous demandant l’autorisation de "prendre des photos ou des vidéos". Aucune donnée à caractère personnel (photo ou vidéo vous appartenant) n’est stockée ou transmise par TousAntiCovid, seul le contenu du QR Code est utilisé dans le cadre de l’application</p>
    
    <h3>Destinataire des données</h3>
        
    <p>Pour l’élaboration de statistiques anonymes</p>

    <ul>
        <li>Inria en tant que sous-traitant de la Direction générale de la santé du ministère des solidarités et de la santé.</li>
    </ul>
            
    <h3>Durée de conservation</h3>
   
    <p>Pour l’élaboration de statistiques anonymes : les données sont conservées pendant 3 mois.</p>

    <p>Pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez vous adresser au ministère de la santé par courriel : <a href="mailto:tousanticovid-rgpd@sante.gouv.fr">tousanticovid-rgpd@sante.gouv.fr</a> ou par courrier postal : Ministère des solidarités et de la santé – Référent en protection des données - Direction générale de la santé - 14, avenue Duquesne 75350 PARIS 07 SP.</p>

    <p>Si vous estimez que le traitement n’est pas conforme aux règles de protection des données, vous pouvez adresser une réclamation à la CNIL <a href="https://www.cnil.fr/fr/plaintes/" target="_blank">https://www.cnil.fr/fr/plaintes/</a> CNIL - Service des plaintes - 3 place Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
    
</div>

@endsection