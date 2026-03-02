import { useState, useEffect } from "react";

// ⚠️ REMETTEZ VOS IMAGES BASE64 ICI ⚠️
const IV = "VOTRE_IMAGE_BASE64";
const IVO = "VOTRE_IMAGE_BASE64";
const IB = "VOTRE_IMAGE_BASE64";
const ILI = "VOTRE_IMAGE_BASE64";
const ILN = "VOTRE_IMAGE_BASE64";
const IS = "VOTRE_IMAGE_BASE64";
const IZENTHAI = "VOTRE_IMAGE_BASE64";
const IBRUNCH = "VOTRE_IMAGE_BASE64";

const GS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@200;300;400;500&display=swap');
* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
body { margin: 0; padding: 0; background: #E5E5E5; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: 'Montserrat', sans-serif; }
.phone { width: 390px; height: 844px; background: #FAF8F3; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.15); display: flex; flex-direction: column; }
.tab-bar { height: 60px; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-top: 1px solid rgba(46,60,77,0.05); display: flex; justify-content: space-around; align-items: center; padding: 0 10px; flex-shrink: 0; }
.tab-item { display: flex; flex-direction: column; align-items: center; gap: 4px; color: #9A8F7E; cursor: pointer; transition: all .2s; }
.tab-item.active { color: #2E3C4D; }
.tab-icon { font-size: 18px; }
.tab-label { font-size: 9px; letter-spacing: .06em; font-weight: 400; }
.hero { position: relative; padding: 40px 22px 24px; background: #2E3C4D; color: #FAF8F3; overflow: hidden; }
.hero-ring { position: absolute; width: 300px; height: 300px; border-radius: 50%; border: 1px solid rgba(227,193,145,0.15); top: -100px; right: -100px; }
.hero-ring2 { position: absolute; width: 400px; height: 400px; border-radius: 50%; border: 1px solid rgba(227,193,145,0.05); top: -150px; right: -150px; }
.hero-tag { font-size: 9px; letter-spacing: .2em; text-transform: uppercase; color: #E3C191; margin-bottom: 8px; font-weight: 300; }
.hero-name { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 300; font-style: italic; margin-bottom: 16px; }
.hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; background: rgba(250,248,243,0.1); border-radius: 20px; border: 1px solid rgba(250,248,243,0.1); }
.hero-dot { width: 6px; height: 6px; border-radius: 50%; background: #E3C191; }
.hero-badge span { font-size: 10px; font-weight: 300; letter-spacing: .06em; }
.sec { margin: 24px 22px 14px; }
.sec-title { font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #2E3C4D; font-weight: 300; font-style: italic; }
.sec-line { display: flex; align-items: center; gap: 12px; margin-top: 6px; }
.ocre-bar { height: 1px; width: 24px; background: #E3C191; }
.sec-sub { font-size: 9px; color: #9A8F7E; letter-spacing: .15em; text-transform: uppercase; font-weight: 400; }
.card { margin: 0 18px 12px; background: #fff; border-radius: 14px; padding: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.02); transition: transform .2s; }
.card:active { transform: scale(0.98); }
.card-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid rgba(46,60,77,0.05); }
.card-row:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
.card-lbl { font-size: 10px; color: #9A8F7E; font-weight: 300; letter-spacing: .04em; }
.card-val { font-size: 12px; color: #2E3C4D; font-weight: 400; text-align: right; }
.service-list { display: flex; overflow-x: auto; gap: 14px; padding: 0 22px 20px; scrollbar-width: none; }
.service-card { width: 220px; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.02); flex-shrink: 0; cursor: pointer; transition: transform .2s; }
.service-card:active { transform: scale(0.97); }
.service-img { width: 100%; height: 120px; object-fit: cover; }
.service-body { padding: 14px; }
.service-title { font-family: 'Cormorant Garamond', serif; font-size: 16px; font-weight: 400; color: #2E3C4D; margin-bottom: 4px; }
.service-desc { font-size: 10px; color: #9A8F7E; line-height: 1.4; font-weight: 300; margin-bottom: 12px; }
.service-ftr { display: flex; justify-content: space-between; align-items: center; }
.service-tag { font-size: 9px; padding: 4px 8px; background: #F5ECD8; color: #C9A96E; border-radius: 4px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; }
.service-price { font-size: 11px; color: #2E3C4D; font-weight: 400; }
.msg-item { display: flex; gap: 12px; align-items: center; }
.msg-av { width: 44px; height: 44px; border-radius: 50%; background: #E3C191; flex-shrink: 0; display: flex; justify-content: center; align-items: center; color: #fff; font-family: 'Cormorant Garamond', serif; font-size: 18px; font-style: italic; }
.msg-name { font-size: 13px; color: #2E3C4D; font-weight: 500; margin-bottom: 4px; }
.msg-prev { font-size: 11px; color: #9A8F7E; font-weight: 300; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.sheet-overlay { position: absolute; inset: 0; background: rgba(46,60,77,0.4); z-index: 50; animation: fi .2s ease; }
.sheet { position: absolute; bottom: 0; left: 0; right: 0; background: #FAF8F3; border-radius: 24px 24px 0 0; padding: 24px 22px; z-index: 51; animation: su .3s cubic-bezier(0.1, 0, 0.2, 1); max-height: 85%; overflow-y: auto; scrollbar-width: none; }
@keyframes fi { from { opacity: 0; } to { opacity: 1; } }
@keyframes su { from { transform: translateY(100%); } to { transform: translateY(0); } }
.sheet-handle { width: 36px; height: 4px; background: rgba(46,60,77,0.1); border-radius: 2px; margin: 0 auto 20px; }
.sheet-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; color: #2E3C4D; font-weight: 400; font-style: italic; margin-bottom: 6px; }
.sheet-desc { font-size: 11px; color: #9A8F7E; line-height: 1.5; font-weight: 300; margin-bottom: 24px; }
.sheet-section { font-size: 9px; letter-spacing: .15em; text-transform: uppercase; color: #9A8F7E; margin-bottom: 12px; font-weight: 500; }
.field-label { font-size: 11px; color: #2E3C4D; font-weight: 400; margin-bottom: 8px; }
.field-input { width: 100%; padding: 12px 14px; border-radius: 10px; border: 1px solid rgba(46,60,77,0.1); background: #fff; font-family: 'Montserrat', sans-serif; font-size: 12px; color: #2E3C4D; outline: none; margin-bottom: 16px; font-weight: 300; }
.field-textarea { width: 100%; padding: 12px 14px; border-radius: 10px; border: 1px solid rgba(46,60,77,0.1); background: #fff; font-family: 'Montserrat', sans-serif; font-size: 12px; color: #2E3C4D; outline: none; margin-bottom: 16px; resize: none; font-weight: 300; }
.btn-primary { width: 100%; padding: 14px; border-radius: 12px; border: none; background: #2E3C4D; color: #E3C191; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; cursor: pointer; transition: opacity .2s; }
.btn-primary:active { opacity: .8; }
.sheet-divider { height: 1px; background: rgba(46,60,77,0.05); margin: 20px 0; }
.options-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.option-chip { padding: 8px 14px; border-radius: 20px; border: 1px solid rgba(46,60,77,0.1); font-size: 11px; color: #2E3C4D; cursor: pointer; transition: all .2s; font-weight: 300; }
.option-chip.sel { background: #2E3C4D; color: #E3C191; border-color: #2E3C4D; }
.price-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.price-row-left { display: flex; flex-direction: column; gap: 2px; }
.price-row-label { font-size: 12px; color: #2E3C4D; font-weight: 400; }
.price-row-val { font-size: 10px; color: #9A8F7E; font-weight: 300; }
.chat-hdr { height: 60px; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(46,60,77,0.05); display: flex; align-items: center; padding: 0 16px; flex-shrink: 0; }
.chat-back { font-size: 20px; color: #2E3C4D; background: none; border: none; padding: 0 10px 0 0; cursor: pointer; }
.chat-title { flex: 1; text-align: center; font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 400; color: #2E3C4D; }
.chat-body { flex: 1; overflow-y: auto; padding: 20px 16px; display: flex; flex-direction: column; gap: 16px; background: #FAF8F3; scrollbar-width: none; }
.chat-bubble { max-width: 75%; padding: 12px 14px; border-radius: 14px; font-size: 12px; line-height: 1.4; font-weight: 300; }
.chat-bubble.rx { background: #fff; color: #2E3C4D; align-self: flex-start; border-bottom-left-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); }
.chat-bubble.tx { background: #2E3C4D; color: #FAF8F3; align-self: flex-end; border-bottom-right-radius: 4px; }
.chat-input-area { padding: 12px 16px; background: #fff; border-top: 1px solid rgba(46,60,77,0.05); display: flex; gap: 10px; align-items: center; flex-shrink: 0; }
.chat-input { flex: 1; padding: 10px 14px; border-radius: 20px; border: 1px solid rgba(46,60,77,0.1); background: #FAF8F3; font-family: 'Montserrat', sans-serif; font-size: 12px; color: #2E3C4D; outline: none; font-weight: 300; }
.chat-send { background: #E3C191; border: none; width: 36px; height: 36px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: #2E3C4D; cursor: pointer; }
.act-cat-list { display: flex; gap: 10px; overflow-x: auto; padding: 0 22px; margin-bottom: 20px; scrollbar-width: none; }
.act-cat { padding: 8px 16px; border-radius: 20px; border: 1px solid rgba(46,60,77,0.1); font-size: 11px; color: #9A8F7E; white-space: nowrap; cursor: pointer; transition: all .2s; }
.act-cat.sel { background: #2E3C4D; color: #E3C191; border-color: #2E3C4D; }
.act-card { margin: 0 22px 16px; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
.act-img { width: 100%; height: 160px; object-fit: cover; }
.act-body { padding: 16px; }
.act-title { font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #2E3C4D; margin-bottom: 6px; font-weight: 400; }
.act-desc { font-size: 11px; color: #9A8F7E; line-height: 1.5; margin-bottom: 14px; font-weight: 300; }
.toast { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); background: #2E3C4D; color: #E3C191; padding: 12px 20px; border-radius: 30px; font-size: 11px; font-weight: 500; letter-spacing: .05em; z-index: 100; box-shadow: 0 10px 25px rgba(0,0,0,0.2); animation: td .3s ease; }
@keyframes td { from { transform: translate(-50%, -20px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
.stats { display: flex; padding: 0 18px; gap: 10px; margin-bottom: 10px; }
.stat { flex: 1; background: #fff; border-radius: 12px; padding: 12px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
.stat-val { font-family: 'Cormorant Garamond', serif; font-size: 24px; color: #2E3C4D; margin-bottom: 4px; font-style: italic; }
.stat-lbl { font-size: 9px; color: #9A8F7E; text-transform: uppercase; letter-spacing: .05em; }
.notif-card { margin: 0 18px 12px; background: #fff; border-radius: 14px; border: 1px solid rgba(46,60,77,0.05); overflow: hidden; }
.notif-hdr { background: rgba(46,60,77,0.02); padding: 10px 14px; border-bottom: 1px solid rgba(46,60,77,0.03); display: flex; align-items: center; gap: 10px; }
.notif-hdr-title { font-size: 11px; color: #2E3C4D; font-weight: 500; letter-spacing: .05em; }
.notif-body { padding: 14px; }
.notif-service { font-family: 'Cormorant Garamond', serif; font-size: 16px; color: #2E3C4D; margin-bottom: 8px; font-weight: 400; }
.notif-detail { background: #FAF8F3; padding: 10px; border-radius: 8px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px; }
.notif-detail-row { display: flex; justify-content: space-between; font-size: 10px; }
.notif-detail-label { color: #9A8F7E; }
.notif-detail-val { color: #2E3C4D; font-weight: 500; }
.notif-actions { display: flex; gap: 8px; }
.notif-btn { flex: 1; padding: 10px; border-radius: 8px; border: none; font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: .05em; cursor: pointer; }
.notif-accept { background: #2E3C4D; color: #E3C191; }
.notif-decline { background: rgba(46,60,77,0.05); color: #9A8F7E; }
.profile-hero { padding: 30px 22px; display: flex; flex-direction: column; align-items: center; background: #2E3C4D; position: relative; overflow: hidden; }
.ph-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.2; }
.prof-av { width: 70px; height: 70px; border-radius: 50%; background: #E3C191; color: #2E3C4D; display: flex; justify-content: center; align-items: center; font-family: 'Cormorant Garamond', serif; font-size: 28px; font-style: italic; z-index: 1; margin-bottom: 12px; }
.prof-name { z-index: 1; color: #FAF8F3; font-family: 'Cormorant Garamond', serif; font-size: 22px; margin-bottom: 4px; font-weight: 300; }
.prof-plan { z-index: 1; color: #E3C191; font-size: 10px; letter-spacing: .15em; text-transform: uppercase; font-weight: 300; }
.q-check { width: 20px; height: 20px; border-radius: 4px; border: 1px solid rgba(46,60,77,0.2); display: flex; align-items: center; justify-content: center; }
.q-check.checked { background: #2E3C4D; border-color: #2E3C4D; }
.q-check-icon { color: #E3C191; font-size: 12px; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(229,115,115,0.4); } 70% { box-shadow: 0 0 0 6px rgba(229,115,115,0); } 100% { box-shadow: 0 0 0 0 rgba(229,115,115,0); } }
`;

function useT(lang) {
  return (key) => DICT[lang][key] || key;
}

const DICT = {
  fr: {
    tab_home:"Résidence", tab_villa:"Villa", tab_services:"Services", tab_activites:"Activités", tab_messages:"Messages", tab_profile:"Profil",
    tab_sejour:"Mon séjour",
    votre_residence:"Votre résidence", bienvenue:"Bienvenue", sejour_actif:"Résidence active", sejour_avenir:"Résidence à venir",
    sejour_termine:"Séjour terminé", sejour_en_cours:"Séjour en cours",
    votre_sejour:"Votre séjour", messagerie:"Messagerie",
    questionnaire_lbl:"Questionnaire pré-séjour", questionnaire_required:"À compléter avant votre arrivée · Requis",
    fiche_complete:"✓ Fiche complétée", action_requise:"Action requise",
    votre_havre:"Votre havre", votre_programme:"Votre programme",
    villa_lbl:"Villa", adresse_lbl:"Adresse", checkin_lbl:"Arrivée", checkout_lbl:"Départ", duree_lbl:"Durée", occupants_lbl:"Occupants",
    a_preciser:"À préciser", heure_a_definir:"heure à définir", q_nuits:"nuits",
    concierge_dispo:"Votre équipe disponible 7j/7",
    nos_services:"Nos services", enrichissez:"Enrichissez votre séjour", reservez:"Réservez en quelques secondes",
    voir_reserver:"✦ Voir & réserver", en_attente:"⏳ En attente", confirme:"✓ Confirmé", non_dispo:"✗ Indisponible",
    cliquez_reserver:"9 services · Cliquez pour réserver", pour_votre_confort:"Pour votre confort",
    demande_envoyee_srv:"✓ Demande envoyée",
    sur_mesure:"Sur-mesure · Sur devis", vos_activites:"Vos activités",
    act_intro:"Choisissez une catégorie. Votre concierge concevra une expérience sur-mesure.",
    act_qualite:"Inhérence travaille uniquement avec des prestataires sélectionnés pour leur excellence.",
    act_messagerie:"Une envie particulière ? Contactez directement votre concierge via la messagerie.",
    act_envoyer:"Envoyer ma demande", act_sent:"Demande envoyée", act_sent_sub:"Votre concierge va concevoir une proposition sur-mesure et vous répondra sous 24h.",
    act_votre_demande:"Votre demande", act_nouvelle:"Nouvelle demande", act_reponse:"Réponse personnalisée sous 24h",
    act_composons:"Composons votre expérience", act_activite_label:"Activité(s) souhaitée(s)",
    act_activite_ph:"Décrivez l'activité ou les activités que vous aimeriez faire...",
    act_participants:"Nombre de participants", act_budget:"Budget par personne", act_date:"Date souhaitée",
    act_heure:"Heure de départ", act_heure_opt:"(optionnel)", act_ambiance:"Ambiance souhaitée",
    act_ambiance_ph:"Ex: romantique & intime, festive, nature & découverte...",
    act_ambiance_tip:"Plus vous nous en direz, plus la proposition sera ajustée à vos envies.",
    act_completer:"Remplissez les champs requis *",
    mon_compte:"Mon compte", gerer_compte:"Gérer mon compte", nom_email_tel:"Nom, email, téléphone",
    mes_prefs:"Mes préférences", allergies_indisp:"Allergies & indispensables",
    assistance:"Assistance", contactez_nous:"Contactez-nous", legal:"Mentions légales", politique_conf:"Politique de confidentialité",
    rgpd:"RGPD · Données personnelles", deconnecter:"Se déconnecter", enregistrer_modifs:"Enregistrer les modifications",
    supprimer_compte:"Supprimer mon compte définitivement",
    allergies_lbl:"🚫 Allergies & Intolérances",
    indispensables_lbl:"✨ Indispensables à votre arrivée",
    indispensables_note:"Ces éléments ne font l'objet d'aucune facturation supplémentaire — ils nous permettent simplement de préparer la villa à votre goût.",
    musique_lbl:"🎵 Préférences Musicales",
    musique_note:"Vos styles de musique — nous préparerons une playlist pour votre arrivée.",
    enregistrer_prefs:"Enregistrer mes préférences",
    avis_google:"Laisser un avis Google", avis_sub:"Vos retours sont précieux", votre_experience:"Votre expérience",
    mon_vol:"Mon vol", num_vol:"Numéro de vol", num_vol_ph:"Ex: AF 756", vol_note:"Ce numéro s'affichera dans le résumé de votre séjour.",
    chat_dispo:"● disponible", chat_ph:"Votre message...",
    connexion_securisee:"🔒 Connexion sécurisée Firebase", se_connecter:"Se connecter", espace_membres:"Espace Membres",
    concierge_prestige:"Conciergerie de prestige", email_lbl:"Email", mdp_lbl:"Mot de passe",
    mon_espace:"Mon espace", mdp_oublie:"Mot de passe oublié ?", envoyer_lien:"Envoyer le lien", retour_connexion:"Retour à la connexion",
    email_envoye:"Email envoyé", mdp_oublie_title:"Mot de passe oublié",
    mdp_oublie_sub:"Entrez votre adresse email. Vous recevrez un lien pour créer un nouveau mot de passe.",
    q_title:"Questionnaire pré-séjour", q_etape:"Étape", q_sur:"sur", q_continuer:"Continuer", q_retour:"Retour", q_envoyer:"Envoyer ma fiche ✦",
    q_votre_groupe:"Votre groupe", q_groupe_sub:"Ces informations nous permettent de préparer la villa dans les moindres détails.",
    q_adultes:"Adultes", q_enfants:"Enfants", q_moins12:"Moins de 12 ans", q_ages_enfants:"Âges des enfants", q_ages_ph:"Ex: 3, 7, 11 ans",
    q_bebe:"Matériel bébé", q_bebe_sub:"Pour les plus petits, nous mettons à disposition sur demande :",
    q_berceau:"Lit parapluie", q_chaise:"Chaise haute", q_inclus:"Inclus pour 1", q_supplement:"40 € / unité suppl.", q_supplement_lbl:"Supplément estimé",
    q_aucun_besoin:"Aucun besoin ? Passez simplement à l'étape suivante.",
    q_allergies:"Allergies & régime", q_allergies_intro:"Afin de garantir votre sécurité et d'adapter le panier d'accueil ainsi que les repas, notre équipe doit avoir connaissance de toute allergie ou régime strict.",
    q_allergies_lbl:"Précisez vos allergies ou régimes", q_allergies_ph:"Ex: Sans gluten, végétarien, allergie crustacés, sans lactose...",
    q_no_allergie:"Aucune allergie ni régime spécifique", q_champ_oblig:"⚠ Ce champ est requis",
    q_occasion:"Occasion spéciale ?", q_occasion_sub:"Un anniversaire, un voyage de noces, des retrouvailles en famille ? Nous aimons rendre ces moments inoubliables.",
    q_occasion_opts:["Anniversaire","Voyage de noces","Demande en mariage","Naissance","Fête de famille","Séjour détente","Autre"],
    q_occasion_autre:"Précisez l'occasion...", q_no_occasion:"Pas d'occasion spéciale ? Passez à la suite.",
    q_arrivee:"Heure d'arrivée", q_arrivee_sub:"Nos horaires d'accueil se situent entre 15h et 20h. Votre concierge sera entièrement dédié à ce moment.",
    q_arrivee_lbl:"À quelle heure pensez-vous arriver ?", q_remise:"Remise des clés",
    q_remise_sub:"Une présentation complète de la villa prend environ 20 minutes.", q_remise_opts:[
      {label:"Présentation complète", value:1},
      {label:"Accueil essentiel (rapide)", value:2},
      {label:"Arrivée autonome (boîte à clés)", value:3}
    ],
    q_transport:"Votre transport", q_transport_sub:"Comment prévoyez-vous de vous déplacer sur l'île ?",
    q_loc_opts:[
      {id:"avion-voiture",label:"J'arrive par avion et je loue un véhicule",icon:"✈️"},
      {id:"avion-sans-voiture",label:"J'arrive par avion, je veux une solution de transfert",icon:"🚕"},
      {id:"local",label:"Je suis résident, je viens par mes propres moyens",icon:"🏝️"}
    ],
    q_need_vehicle:"Souhaitez-vous une proposition de location avec nos partenaires privilégiés ?", q_oui:"Oui, s'il vous plaît", q_non:"Non merci",
    q_type_vehicle:"Type de véhicule", q_boite:"Boîte de vitesse", q_recuperation:"Récupération du véhicule",
    q_vehicle_opts:["SUV","Berline","Familiale","Citadine"], q_boite_opts:["Manuelle","Automatique","Peu importe"],
    q_transfert_opts:["À l'aéroport","À la villa (avec service de transfert)"],
    q_vol:"Votre vol", q_vol_sub:"Ces informations nous permettent d'anticiper votre accueil et de vous assister en cas de retard.",
    q_num_vol:"Numéro de vol", q_num_vol_ph:"Ex : AF 756", q_vol_tip:"Vous trouverez ce numéro sur votre billet ou confirmation de réservation.",
    q_pas_vol:"Je n'arrive pas par avion",
    q_services:"À votre arrivée", q_services_sub:"Souhaitez-vous que nous anticipions vos premières heures dans la villa ?",
    q_petitdej:{value:"petitdej",label:"Petit-déjeuner signature",sub:"Le lendemain matin · 30 € / pers."},
    q_courses:{value:"courses",label:"Pré-stockage de courses",sub:"Vos produits, déjà rangés à votre arrivée (Les courses sont à la charge du voyageur)"},
    q_aucun_service:{value:"aucun",label:"Aucun service pour l'instant"},
    q_service_confirm:"✓ Votre demande sera transmise à votre concierge qui reviendra vers vous pour finaliser les détails.",
    popup_titre:"Votre séjour est terminé", popup_sub:"Votre accès à la plateforme sera désactivé dans 7 jours. Pensez à télécharger vos factures ou informations si besoin.",
    popup_acces:"Accès disponible jusqu'au", popup_compris:"J'ai compris", popup_fermer:"Fermer",
    voy_passe:"Passé", voy_encours:"En cours", voy_prevu:"Prévu",
    fiche_notif_titre:"Questionnaire complété", fiche_notif_sub:"La fiche pré-séjour a été envoyée",
  },
  en: {
    tab_home:"Residence", tab_villa:"Villa", tab_services:"Services", tab_activites:"Activities", tab_messages:"Messages", tab_profile:"Profile",
    tab_sejour:"My stay",
    votre_residence:"Your residence", bienvenue:"Welcome", sejour_actif:"Active residence", sejour_avenir:"Upcoming residence",
    sejour_termine:"Stay completed", sejour_en_cours:"Stay in progress",
    votre_sejour:"Your stay", messagerie:"Messaging",
    questionnaire_lbl:"Pre-stay questionnaire", questionnaire_required:"To complete before your arrival · Required",
    fiche_complete:"✓ Form complete", action_requise:"Action required",
    votre_havre:"Your haven", votre_programme:"Your itinerary",
    villa_lbl:"Villa", adresse_lbl:"Address", checkin_lbl:"Check-in", checkout_lbl:"Check-out", duree_lbl:"Duration", occupants_lbl:"Guests",
    a_preciser:"To be specified", heure_a_definir:"time to be defined", q_nuits:"nights",
    concierge_dispo:"Your team available 7 days/7",
    nos_services:"Our services", enrichissez:"Enhance your stay", reservez:"Book in seconds",
    voir_reserver:"✦ View & book", en_attente:"⏳ Pending", confirme:"✓ Confirmed", non_dispo:"✗ Unavailable",
    cliquez_reserver:"9 services · Click to book", pour_votre_confort:"For your comfort",
    demande_envoyee_srv:"✓ Request sent",
    sur_mesure:"Bespoke · On request", vos_activites:"Your activities",
    act_intro:"Choose a category. Your concierge will craft a tailor-made experience.",
    act_qualite:"Inhérence only works with providers selected for their excellence.",
    act_messagerie:"Have a specific idea? Contact your concierge directly via messaging.",
    act_envoyer:"Send my request", act_sent:"Request sent", act_sent_sub:"Your concierge will craft a bespoke experience and get back to you within 24h.",
    act_votre_demande:"Your request", act_nouvelle:"New request", act_reponse:"Personalised response within 24h",
    act_composons:"Let's compose your experience", act_activite_label:"Desired activity(ies)",
    act_activite_ph:"Describe the activity or activities you wish to do...",
    act_participants:"Number of participants", act_budget:"Budget per person", act_date:"Preferred date",
    act_heure:"Departure time", act_heure_opt:"(optional)", act_ambiance:"Desired atmosphere",
    act_ambiance_ph:"e.g. romantic & intimate, festive, nature & adventure...",
    act_ambiance_tip:"The more you tell us, the more tailored our proposal will be.",
    act_completer:"Complete the required fields *",
    mon_compte:"My account", gerer_compte:"Manage my account", nom_email_tel:"Name, email, phone",
    mes_prefs:"My preferences", allergies_indisp:"Allergies & essentials",
    assistance:"Assistance", contactez_nous:"Contact us", legal:"Legal", politique_conf:"Privacy policy",
    rgpd:"GDPR · Personal data", deconnecter:"Sign out", enregistrer_modifs:"Save changes",
    supprimer_compte:"Permanently delete my account",
    allergies_lbl:"🚫 Allergies & intolerances",
    indispensables_lbl:"✨ Essentials on arrival",
    indispensables_note:"These elements incur no additional charge — they simply help us prepare your villa to your taste.",
    musique_lbl:"🎵 Music preferences",
    musique_note:"Your music preferences — we will prepare a playlist for your arrival.",
    enregistrer_prefs:"Save my preferences",
    avis_google:"Leave a Google review", avis_sub:"Your feedback means a lot to us", votre_experience:"Your experience",
    mon_vol:"My flight", num_vol:"Flight number", num_vol_ph:"e.g. AF 756", vol_note:"This number will appear in your stay itinerary.",
    chat_dispo:"● available", chat_ph:"Your message...",
    connexion_securisee:"🔒 Secure Firebase connection", se_connecter:"Sign in", espace_membres:"Members Area",
    concierge_prestige:"Luxury concierge service", email_lbl:"Email", mdp_lbl:"Password",
    mon_espace:"My space", mdp_oublie:"Forgot password?", envoyer_lien:"Send link", retour_connexion:"Back to sign in",
    email_envoye:"Email sent", mdp_oublie_title:"Forgot password",
    mdp_oublie_sub:"Enter your email address. You will receive a link to create a new password.",
    q_title:"Pre-stay questionnaire", q_etape:"Step", q_sur:"of", q_continuer:"Continue", q_retour:"Back", q_envoyer:"Submit my form ✦",
    q_votre_groupe:"Your group", q_groupe_sub:"This information allows us to prepare your villa in every detail.",
    q_adultes:"Adultes", q_enfants:"Children", q_moins12:"Under 12 years old", q_ages_enfants:"Children's ages", q_ages_ph:"e.g. 3, 7, 11 years old",
    q_bebe:"Baby equipment", q_bebe_sub:"For little ones, we provide on request:",
    q_berceau:"Travel cot", q_chaise:"High chair", q_inclus:"Included for 1", q_supplement:"€40 / additional unit", q_supplement_lbl:"Estimated supplement",
    q_aucun_besoin:"No need? Simply move to the next step.",
    q_allergies:"Allergies & dietary requirements", q_allergies_intro:"To ensure your safety and adapt the welcome basket and meals, our team must know of any allergy or strict dietary requirement.",
    q_allergies_lbl:"Specify your allergies or dietary requirements", q_allergies_ph:"e.g. Gluten-free, vegetarian, shellfish allergy, dairy-free...",
    q_no_allergie:"No allergies or dietary requirements", q_champ_oblig:"⚠ This field is required",
    q_occasion:"Special occasion?", q_occasion_sub:"A birthday, honeymoon, family celebration? We love making these moments unforgettable.",
    q_occasion_opts:["Birthday","Honeymoon","Marriage proposal","New baby","Family celebration","Relaxation stay","Other"],
    q_occasion_autre:"Specify the occasion...", q_no_occasion:"No special occasion? Move to the next step.",
    q_arrivee:"Arrival time", q_arrivee_sub:"Our welcome hours are between 3pm and 8pm. Your concierge will be entirely devoted to this moment.",
    q_arrivee_lbl:"What time do you expect to arrive?", q_remise:"Key handover",
    q_remise_sub:"A full presentation of the villa takes about 20 minutes.", q_remise_opts:[
      {label:"Full presentation", value:1},
      {label:"Essential welcome (quick)", value:2},
      {label:"Self check-in (key box)", value:3}
    ],
    q_transport:"Your transport", q_transport_sub:"How do you plan to get around the island?",
    q_loc_opts:[
      {id:"avion-voiture",label:"I am flying in and renting a vehicle",icon:"✈️"},
      {id:"avion-sans-voiture",label:"I am flying in, I need a transfer solution",icon:"🚕"},
      {id:"local",label:"I am a resident, arriving by my own means",icon:"🏝️"}
    ],
    q_need_vehicle:"Would you like a rental proposal from our preferred partners?", q_oui:"Yes, please", q_non:"No thanks",
    q_type_vehicle:"Vehicle type", q_boite:"Transmission", q_recuperation:"Vehicle pick-up",
    q_vehicle_opts:["SUV","Saloon","Estate","City car"], q_boite_opts:["Manual","Automatic","No preference"],
    q_transfert_opts:["At the airport","At the villa (with transfer service)"],
    q_vol:"Your flight", q_vol_sub:"This information allows us to anticipate your arrival and assist in case of delay.",
    q_num_vol:"Flight number", q_num_vol_ph:"e.g. AF 756", q_vol_tip:"You will find this number on your ticket or booking confirmation.",
    q_pas_vol:"I am not arriving by plane",
    q_services:"Upon your arrival", q_services_sub:"Would you like us to anticipate your first hours in the villa?",
    q_petitdej:{value:"petitdej",label:"Signature breakfast",sub:"The next morning · €30 / pers."},
    q_courses:{value:"courses",label:"Grocery pre-stocking",sub:"Your items, already stored upon arrival (Groceries are at the guest's expense)"},
    q_aucun_service:{value:"aucun",label:"No service for now"},
    q_service_confirm:"✓ Your request will be forwarded to your concierge who will contact you to finalise the details.",
    popup_titre:"Your stay has ended", popup_sub:"Your access to the platform will be deactivated in 7 days. Remember to download your invoices or info if needed.",
    popup_acces:"Access available until", popup_compris:"Understood", popup_fermer:"Close",
    voy_passe:"Past", voy_encours:"In progress", voy_prevu:"Upcoming",
    fiche_notif_titre:"Questionnaire completed", fiche_notif_sub:"The pre-stay form has been sent",
  }
};

const VILLA_DATA = {
  bwakanpech: {
    name: "Villa Bwa Kanpech",
    cover: IV,
    location: "Le Vauclin",
    tempPiscine: "28°C",
    wifi: "BwaKanpech_5G",
    infos: [
      { title: "Code Wi-Fi", content: "Réseau : BwaKanpech_5G\nMot de passe : SoleilMartinique2024" },
      { title: "Climatisation", content: "Pour préserver notre belle île, merci d'éteindre la climatisation lorsque vous quittez la villa." },
      { title: "Piscine au Sel", content: "Pour garder une eau cristalline et éviter les algues, le rinçage est obligatoire avant chaque baignade." },
      { title: "Gestion des déchets", content: "En cas de surplus, merci de déposer vos déchets à l'extérieur pour faciliter leur collecte." },
      { title: "Télévision & Divertissement", content: "Les chaînes TV sont disponibles via l'application Canal+ intégrée à votre télévision." },
      { title: "Produits de première nécessité", content: "Le renouvellement des sacs poubelles, produits ménagers et du papier toilette en cours de séjour est à la charge du voyageur." },
    ],
    tutos: [
      { label: "Comment sécuriser la barrière piscine", url: "https://www.youtube.com/shorts/rQ5Mbc1ppT0" },
      { label: "Débloquer le portail manuel (coupure de courant)", url: "https://www.youtube.com/shorts/nQkdgFmY6S4" },
      { label: "Activer ou désactiver l'alarme de sécurité", url: "https://www.youtube.com/shorts/W7Kfi7BXY9w" },
    ],
    quartier: [
      { icon: "🥐", nom: "Boulangerie Douceur Caraïbe", detail: "Le Marin" },
      { icon: "🛒", nom: "Carrefour Market", detail: "Le Vauclin · Idéal pour vos premières provisions" },
      { icon: "🛒", nom: "Pli Bel Price", detail: "Le Marin · Idéal pour vos provisions de la semaine" },
      { icon: "⛽", nom: "Station-Service Total Énergie", detail: "Le Vauclin · La plus proche" },
    ]
  },
  caryota: {
    name: "Villa Caryota",
    cover: IVO,
    location: "Le Vauclin",
    tempPiscine: "29°C",
    wifi: "Caryota_Guest",
    infos: [
      { title: "Code Wi-Fi", content: "Réseau : Caryota_Guest\nMot de passe : CaryotaMartinique" },
      { title: "Éclairage extérieur", content: "L'éclairage de la piscine s'allume automatiquement de 18h30 à 23h00." },
      { title: "Entretien du jardin", content: "Le jardinier passe tous les mardis matin. Il n'entrera pas dans la maison." },
      { title: "Télévision & Divertissement", content: "Les chaînes TV sont disponibles via l'application Canal+ intégrée à votre télévision." },
      { title: "Produits de première nécessité", content: "Le renouvellement des sacs poubelles, produits ménagers et du papier toilette en cours de séjour est à la charge du voyageur." },
    ],
    tutos: [],
    quartier: []
  }
};

const SERVICES = [
  { id: "petit-dej", title: "Petit-déjeuner", desc: "Livré frais chaque matin à l'heure de votre choix.", img: IBRUNCH, startingPrice: "30 € / pers.", type: "petit-dej" },
  { id: "courses", title: "Pré-stockage courses", desc: "Vos placards remplis avant même votre arrivée.", img: IB, startingPrice: "Dès 90 € + ticket", type: "courses", forfaits: ["Basique (90€)","Complet (150€)","Premium (200€)"] },
  { id: "chef", title: "Chef à domicile", desc: "Un dîner gastronomique préparé dans votre villa.", img: IS, startingPrice: "Sur devis", type: "personnes-date", durations: ["Dîner unique","Demi-pension","Pension complète"] },
  { id: "zenthai", title: "Massage Zen Thaï", desc: "Détente absolue au bord de votre piscine.", img: IZENTHAI, startingPrice: "120 € / pers.", type: "personnes-date", durations: ["60 min","90 min"] },
  { id: "menage", title: "Ménage supplémentaire", desc: "Nettoyage complet pendant votre séjour.", img: IB, startingPrice: "90 € / passage", type: "menage" },
  { id: "transfert", title: "Transfert Aéroport", desc: "Chauffeur privé depuis et vers l'aéroport.", img: IS, startingPrice: "Sur devis", type: "devis" },
  { id: "location", title: "Location véhicule", desc: "Véhicules récents livrés à l'aéroport ou la villa.", img: IS, startingPrice: "Sur devis", type: "devis" },
  { id: "nanny", title: "Babysitting", desc: "Nounous qualifiées pour veiller sur vos enfants.", img: IB, startingPrice: "25 € / heure", type: "dates-seules", nbLabel: "Nombre d'heures estimé" },
  { id: "coach", title: "Coach sportif", desc: "Séance privée adaptée à votre niveau.", img: IS, startingPrice: "80 € / séance", type: "personnes-date", durations: ["Yoga","Pilates","Crosstraining"] },
];

const ACTIVITIES = [
  { title: "Nautisme & Océan", desc: "Sorties catamaran, location de bateaux, paddle, surf...", img: IS, tags: ["Catamaran","Yacht","Plongée","Kitesurf","Jet Ski"] },
  { title: "Nature & Découverte", desc: "Randonnées guidées, cascades cachées, visites privées...", img: IS, tags: ["Randonnée","Cascade","Volcan","Jardin","Quad"] },
  { title: "Ateliers & Culture", desc: "Création de rhum, cuisine créole, artisanat local...", img: IBRUNCH, tags: ["Rhum","Cuisine","Poterie","Histoire"] },
];

const getSteps = (t) => [
  { id: "groupe", title: t("q_votre_groupe"), subtitle: t("q_groupe_sub") },
  { id: "bebe", title: t("q_bebe"), subtitle: t("q_bebe_sub") },
  { id: "allergies", title: t("q_allergies"), subtitle: t("q_allergies_intro") },
  { id: "occasion", title: t("q_occasion"), subtitle: t("q_occasion_sub") },
  { id: "arrivee", title: t("q_arrivee"), subtitle: t("q_arrivee_sub") },
  { id: "transport", title: t("q_transport"), subtitle: t("q_transport_sub") },
  { id: "vol", title: t("q_vol"), subtitle: t("q_vol_sub"), condition: (d)=>d.transport==="avion-voiture"||d.transport==="avion-sans-voiture" },
  { id: "services", title: t("q_services"), subtitle: t("q_services_sub") },
];

function ProgressBar({step, total}) {
  return (
    <div style={{display:"flex",gap:4,marginBottom:20}}>
      {Array.from({length:total}).map((_,i)=>(
        <div key={i} style={{flex:1,height:4,borderRadius:2,background:i<step?"#2E3C4D":"rgba(46,60,77,0.1)",transition:"background .3s"}}/>
      ))}
    </div>
  );
}

function QInput({label, placeholder, value, onChange, type="text", tip}) {
  return (
    <div style={{marginBottom:16}}>
      <div style={{fontSize:11,color:"#2E3C4D",marginBottom:8,fontWeight:400}}>{label}</div>
      <input type={type} placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)} style={{width:"100%",padding:"12px 14px",borderRadius:10,border:"1px solid rgba(46,60,77,0.1)",background:"#fff",fontFamily:"'Montserrat',sans-serif",fontSize:12,color:"#2E3C4D",outline:"none",fontWeight:300}}/>
      {tip && <div style={{fontSize:10,color:"#9A8F7E",marginTop:6,fontStyle:"italic",fontWeight:300}}>{tip}</div>}
    </div>
  );
}

function QSelect({options, value, onChange}) {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:16}}>
      {options.map((o,i)=>{
        const isObj = typeof o==="object";
        const val = isObj?o.value||o.id:o;
        const lbl = isObj?o.label:o;
        const sel = value===val;
        return (
          <div key={i} onClick={()=>onChange(val)} style={{padding:"14px 16px",borderRadius:12,border:`1px solid ${sel?"#E3C191":"rgba(46,60,77,0.1)"}`,background:sel?"#F5ECD8":"#fff",cursor:"pointer",display:"flex",alignItems:"center",gap:12,transition:"all .2s"}}>
            <div className={`q-check ${sel?"checked":""}`}>{sel&&<span className="q-check-icon">✓</span>}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:12,color:sel?"#C9A96E":"#2E3C4D",fontWeight:sel?500:300}}>{lbl}</div>
              {isObj&&o.sub&&<div style={{fontSize:10,color:sel?"#C9A96E":"#9A8F7E",marginTop:4,fontWeight:300}}>{o.sub}</div>}
            </div>
            {isObj&&o.icon&&<span style={{fontSize:18}}>{o.icon}</span>}
          </div>
        );
      })}
    </div>
  );
}

function QToggle({options, selected, onChange, multiple=false}) {
  const isSelected = (o) => multiple ? selected.includes(o) : selected===o;
  const toggle = (o) => {
    if(multiple) onChange(selected.includes(o) ? selected.filter(x=>x!==o) : [...selected,o]);
    else onChange(o);
  };
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16}}>
      {options.map((o,i)=>(
        <div key={i} onClick={()=>toggle(o)} style={{padding:"8px 14px",borderRadius:2,border:`1px solid ${isSelected(o)?"#E3C191":"rgba(46,60,77,0.12)"}`,background:isSelected(o)?"#F5ECD8":"#fff",cursor:"pointer",fontSize:11,color:isSelected(o)?"#C9A96E":"#2E3C4D",fontWeight:300,letterSpacing:".04em",transition:"all .15s"}}>{o}</div>
      ))}
    </div>
  );
}

function QCounter({label, value, onChange, min=0, sub}) {
  return (
    <div style={{display:"flex",alignItems:"center",padding:"12px 0",borderBottom:"1px solid rgba(46,60,77,0.05)"}}>
      <div style={{flex:1}}>
        <div style={{fontSize:12,color:"#2E3C4D",fontWeight:300}}>{label}</div>
        {sub&&<div style={{fontSize:10,color:"#9A8F7E",marginTop:2,fontWeight:300}}>{sub}</div>}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:14}}>
        <button onClick={()=>onChange(Math.max(min,value-1))} style={{width:30,height:30,borderRadius:"50%",border:"1px solid rgba(46,60,77,0.15)",background:"#fff",cursor:"pointer",fontSize:18,color:"#2E3C4D",fontWeight:300,display:"flex",alignItems:"center",justifyContent:"center"}}>−</button>
        <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:200,color:"#2E3C4D",minWidth:22,textAlign:"center"}}>{value}</span>
        <button onClick={()=>onChange(value+1)} style={{width:30,height:30,borderRadius:"50%",border:"1px solid rgba(46,60,77,0.15)",background:"#fff",cursor:"pointer",fontSize:18,color:"#2E3C4D",fontWeight:300,display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
      </div>
    </div>
  );
}

function QTimePicker({value, onChange}) {
  const hours = ['15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00'];
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:14}}>
      {hours.map((h,i)=>(
        <div key={i} onClick={()=>onChange(h)} style={{padding:"10px 14px",borderRadius:10,border:`1px solid ${value===h?"#E3C191":"rgba(46,60,77,0.1)"}`,background:value===h?"#2E3C4D":"#fff",cursor:"pointer",fontSize:13,fontFamily:"'Cormorant Garamond',serif",fontWeight:300,color:value===h?"#E3C191":"#2E3C4D",transition:"all .15s",minWidth:68,textAlign:"center"}}>{h}</div>
      ))}
    </div>
  );
}

function Questionnaire({onComplete, onClose, lang="fr"}) {
  const t = useT(lang);
  const [step, setStep] = useState(0);
  const [data, setData] = useState({adults:2, children:0, childrenAges:"", berceau:0, chaiseHaute:0, allergies:"", noAllergie:false, occasion:"", arrivalTime:"", remisePersonnes:1, numVol:"", pasDeVol:false, transport:"", vehicleProposal:"", vehicleType:"", boiteVitesse:"", transfertType:"", services:[]});
  
  const set = (key, val) => setData(d=>({...d,[key]:val}));
  const STEPS = getSteps(t).filter(s => !s.condition || s.condition(data));
  const totalSteps = STEPS.length;
  const currentStepData = STEPS[step];

  const canNext = () => {
    if(currentStepData.id==="allergies") return data.noAllergie || (data.allergies && data.allergies.trim().length>2);
    if(currentStepData.id==="arrivee") return !!data.arrivalTime;
    if(currentStepData.id==="vol") return data.pasDeVol || !!data.numVol.trim();
    if(currentStepData.id==="transport") return !!data.transport;
    return true;
  };

  const next = () => {
    if(step < totalSteps-1) setStep(s=>s+1);
    else onComplete(data);
  };
  const prev = () => { if(step>0) setStep(s=>s-1); };

  const QStep = ({title, subtitle, children}) => (
    <div style={{padding:"0 22px",animation:"fi .3s ease"}}>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:"#2E3C4D",marginBottom:6,fontWeight:400}}>{title}</div>
      {subtitle&&<div style={{fontSize:11,color:"#9A8F7E",lineHeight:1.5,marginBottom:24,fontWeight:300}}>{subtitle}</div>}
      {children}
    </div>
  );

  return (
    <div style={{position:"absolute",inset:0,background:"#FAF8F3",zIndex:60,display:"flex",flexDirection:"column",animation:"fi .25s ease"}}>
      <div style={{padding:"14px 22px 0",flexShrink:0}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,fontWeight:300,color:"#2E3C4D",fontStyle:"italic",letterSpacing:".06em"}}>{t("q_title")}</div>
          <button onClick={onClose} style={{background:"none",border:"none",fontSize:20,color:"#9A8F7E",cursor:"pointer"}}>×</button>
        </div>
        <ProgressBar step={step+1} total={totalSteps}/>
      </div>

      <div style={{flex:1,overflowY:"auto",scrollbarWidth:"none"}}>
        {currentStepData.id==="groupe"&&<QStep title={t("q_votre_groupe")} subtitle={t("q_groupe_sub")}>
          <QCounter label={t("q_adultes")} value={data.adults} onChange={v=>set("adults",v)} min={1}/>
          <QCounter label={t("q_enfants")} sub={t("q_moins12")} value={data.children} onChange={v=>set("children",v)} min={0}/>
          {data.children>0&&<QInput label={t("q_ages_enfants")} placeholder={t("q_ages_ph")} value={data.childrenAges} onChange={v=>set("childrenAges",v)}/>}
        </QStep>}
        
        {currentStepData.id==="bebe"&&<QStep title={t("q_bebe")} subtitle={t("q_bebe_sub")}>
          <QCounter label={t("q_berceau")} sub={data.berceau>1?t("q_supplement"):t("q_inclus")} value={data.berceau} onChange={v=>set("berceau",v)} min={0}/>
          <QCounter label={t("q_chaise")} sub={data.chaiseHaute>1?t("q_supplement"):t("q_inclus")} value={data.chaiseHaute} onChange={v=>set("chaiseHaute",v)} min={0}/>
          {(data.berceau>1||data.chaiseHaute>1)&&<div style={{background:"#F5ECD8",borderRadius:10,padding:"10px 14px",marginTop:8}}><div style={{fontSize:10,color:"#C9A96E",fontWeight:400}}>{t("q_supplement_lbl")} : {((Math.max(0,data.berceau-1)+Math.max(0,data.chaiseHaute-1))*40)} €</div></div>}
          <div style={{textAlign:"center",marginTop:30}}><span onClick={next} style={{fontSize:10,color:"#9A8F7E",textDecoration:"underline",cursor:"pointer",fontWeight:300}}>{t("q_aucun_besoin")}</span></div>
        </QStep>}

        {currentStepData.id==="allergies"&&<QStep title={t("q_allergies")} subtitle={t("q_allergies_intro")}>
          {!data.noAllergie&&<QInput label={t("q_allergies_lbl")} placeholder={t("q_allergies_ph")} value={data.allergies} onChange={v=>{set("allergies",v);if(v)set("noAllergie",false);}}/>}
          <div onClick={()=>{set("noAllergie",!data.noAllergie);if(!data.noAllergie)set("allergies","");}} style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer",marginTop:10}}>
            <div className={`q-check ${data.noAllergie?"checked":""}`}>{data.noAllergie&&<span className="q-check-icon">✓</span>}</div>
            <span style={{fontSize:12,color:data.noAllergie?"#2E3C4D":"#9A8F7E",fontWeight:300}}>{t("q_no_allergie")}</span>
          </div>
          {!canNext()&&<div style={{fontSize:10,color:"#E57373",marginTop:14,fontStyle:"italic"}}>{t("q_champ_oblig")}</div>}
        </QStep>}

        {currentStepData.id==="occasion"&&<QStep title={t("q_occasion")} subtitle={t("q_occasion_sub")}>
          <QToggle options={t("q_occasion_opts")} selected={data.occasion} onChange={v=>set("occasion",v)}/>
          {data.occasion==="Autre"&&<QInput label="" placeholder={t("q_occasion_autre")} value={data.occasionAutre||""} onChange={v=>set("occasionAutre",v)}/>}
          <div style={{textAlign:"center",marginTop:30}}><span onClick={()=>{set("occasion","");next();}} style={{fontSize:10,color:"#9A8F7E",textDecoration:"underline",cursor:"pointer",fontWeight:300}}>{t("q_no_occasion")}</span></div>
        </QStep>}

        {currentStepData.id==="arrivee"&&<QStep title={t("q_arrivee")} subtitle={t("q_arrivee_sub")}>
          <div style={{fontSize:11,color:"#2E3C4D",marginBottom:10,fontWeight:400}}>{t("q_arrivee_lbl")}</div>
          <QTimePicker value={data.arrivalTime} onChange={v=>set("arrivalTime",v)}/>
          <div style={{height:20}}/>
          <div style={{fontSize:11,color:"#2E3C4D",marginBottom:10,fontWeight:400}}>{t("q_remise")}</div>
          <div style={{fontSize:10,color:"#9A8F7E",marginBottom:12,fontWeight:300}}>{t("q_remise_sub")}</div>
          <QSelect options={t("q_remise_opts")} value={data.remisePersonnes} onChange={v=>set("remisePersonnes",v)}/>
          {!canNext()&&<div style={{fontSize:10,color:"#E57373",marginTop:14,fontStyle:"italic"}}>{t("q_champ_oblig")}</div>}
        </QStep>}

        {currentStepData.id==="transport"&&<QStep title={t("q_transport")} subtitle={t("q_transport_sub")}>
          <QSelect options={t("q_loc_opts")} value={data.transport} onChange={v=>set("transport",v)}/>
          {(data.transport==="avion-voiture"||data.transport==="local")&&<div style={{marginTop:20,animation:"fi .3s ease"}}>
            <div style={{fontSize:11,color:"#2E3C4D",marginBottom:12,fontWeight:400}}>{t("q_need_vehicle")}</div>
            <QToggle options={[t("q_oui"),t("q_non")]} selected={data.vehicleProposal} onChange={v=>set("vehicleProposal",v)}/>
            {data.vehicleProposal===t("q_oui")&&<div style={{marginTop:16,padding:"14px",background:"#fff",borderRadius:12,border:"1px solid rgba(46,60,77,0.05)"}}>
              <div style={{fontSize:10,color:"#9A8F7E",marginBottom:8,textTransform:"uppercase",letterSpacing:".1em"}}>{t("q_type_vehicle")}</div>
              <QToggle options={t("q_vehicle_opts")} selected={data.vehicleType} onChange={v=>set("vehicleType",v)}/>
              <div style={{fontSize:10,color:"#9A8F7E",marginBottom:8,marginTop:12,textTransform:"uppercase",letterSpacing:".1em"}}>{t("q_boite")}</div>
              <QToggle options={t("q_boite_opts")} selected={data.boiteVitesse} onChange={v=>set("boiteVitesse",v)}/>
            </div>}
          </div>}
          {data.transport==="avion-sans-voiture"&&<div style={{marginTop:20,animation:"fi .3s ease",padding:"14px",background:"#fff",borderRadius:12,border:"1px solid rgba(46,60,77,0.05)"}}>
            <div style={{fontSize:11,color:"#2E3C4D",marginBottom:12,fontWeight:400}}>Souhaitez-vous récupérer un véhicule de location plus tard ?</div>
            <QToggle options={[t("q_oui"),t("q_non")]} selected={data.vehicleProposal} onChange={v=>set("vehicleProposal",v)}/>
            {data.vehicleProposal===t("q_oui")&&<div style={{marginTop:16}}>
              <QToggle options={t("q_transfert_opts")} selected={data.transfertType} onChange={v=>set("transfertType",v)}/>
              <div style={{fontSize:10,color:"#9A8F7E",marginBottom:8,marginTop:12,textTransform:"uppercase",letterSpacing:".1em"}}>{t("q_type_vehicle")}</div>
              <QToggle options={t("q_vehicle_opts")} selected={data.vehicleType} onChange={v=>set("vehicleType",v)}/>
              <div style={{fontSize:10,color:"#9A8F7E",marginBottom:8,marginTop:12,textTransform:"uppercase",letterSpacing:".1em"}}>{t("q_boite")}</div>
              <QToggle options={t("q_boite_opts")} selected={data.boiteVitesse} onChange={v=>set("boiteVitesse",v)}/>
            </div>}
          </div>}
          {!canNext()&&<div style={{fontSize:10,color:"#E57373",marginTop:14,fontStyle:"italic"}}>{t("q_champ_oblig")}</div>}
        </QStep>}

        {currentStepData.id==="vol"&&<QStep title={t("q_vol")} subtitle={t("q_vol_sub")}>
          {!data.pasDeVol&&<QInput label={t("q_num_vol")} placeholder={t("q_num_vol_ph")} tip={t("q_vol_tip")} value={data.numVol} onChange={v=>{set("numVol",v);if(v)set("pasDeVol",false);}}/>}
          <div onClick={()=>{set("pasDeVol",!data.pasDeVol);if(!data.pasDeVol)set("numVol","");}} style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer",marginTop:10}}>
            <div className={`q-check ${data.pasDeVol?"checked":""}`}>{data.pasDeVol&&<span className="q-check-icon">✓</span>}</div>
            <span style={{fontSize:12,color:data.pasDeVol?"#2E3C4D":"#9A8F7E",fontWeight:300}}>{t("q_pas_vol")}</span>
          </div>
          {!canNext()&&<div style={{fontSize:10,color:"#E57373",marginTop:14,fontStyle:"italic"}}>{t("q_champ_oblig")}</div>}
        </QStep>}

        {currentStepData.id==="services"&&<QStep title={t("q_services")} subtitle={t("q_services_sub")}>
          <QSelect options={[t("q_petitdej"),t("q_courses"),t("q_aucun_service")]} value={data.arriveeService} onChange={v=>set("arriveeService",v)}/>
          {data.arriveeService&&data.arriveeService!=="aucun"&&<div style={{fontSize:10,color:"#2E7D32",background:"#E8F5E9",padding:"10px 14px",borderRadius:8,marginTop:12,lineHeight:1.4}}>{t("q_service_confirm")}</div>}
        </QStep>}
      </div>

      <div style={{padding:"16px 22px 24px",background:"#FAF8F3",borderTop:"1px solid rgba(46,60,77,0.05)",display:"flex",gap:12}}>
        {step>0&&<button onClick={prev} style={{padding:"14px",width:60,borderRadius:12,border:"1px solid rgba(46,60,77,0.1)",background:"#fff",color:"#2E3C4D",fontSize:18,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>←</button>}
        <button onClick={next} disabled={!canNext()} style={{flex:1,padding:"14px",borderRadius:12,border:"none",background:canNext()?"#2E3C4D":"rgba(46,60,77,0.2)",color:canNext()?"#E3C191":"#fff",fontFamily:"'Montserrat',sans-serif",fontSize:11,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",cursor:canNext()?"pointer":"not-allowed",transition:"all .2s"}}>
          {step<totalSteps-1?t("q_continuer"):t("q_envoyer")}
        </button>
      </div>
    </div>
  );
}

function ServiceSheet({service, onClose, onSubmit}) {
  const [form, setForm] = useState({});
  const tomorrow = () => { const d = new Date(); d.setDate(d.getDate()+1); return d.toISOString().split("T")[0]; };
  const Qty = ({value, onChange, min=0}) => (
    <div style={{display:"flex",alignItems:"center",gap:12}}>
      <button onClick={()=>onChange(Math.max(min,value-1))} style={{width:28,height:28,borderRadius:"50%",border:"1px solid rgba(46,60,77,0.15)",background:"#fff",fontSize:16,color:"#2E3C4D",display:"flex",justifyContent:"center",alignItems:"center"}}>−</button>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,minWidth:20,textAlign:"center"}}>{value}</span>
      <button onClick={()=>onChange(value+1)} style={{width:28,height:28,borderRadius:"50%",border:"1px solid rgba(46,60,77,0.15)",background:"#fff",fontSize:16,color:"#2E3C4D",display:"flex",justifyContent:"center",alignItems:"center"}}>+</button>
    </div>
  );

  const renderFields = () => {
    const t = service.type;
    if(t==="panier") return <>
      <div className="sheet-divider"/>
      <div className="sheet-section">Composition</div>
      {service.items.map((item,i)=>{
        const key = item.split(" ")[0];
        const val = form.quantities?.[key]||0;
        return <div className="price-row" key={i}><div className="price-row-left"><div className="price-row-label">{item}</div></div>
          <Qty value={val} onChange={v=>setForm(f=>({...f,quantities:{...f.quantities,[key]:v}}))} />
        </div>;
      })}
      <div style={{height:14}}/>
      <div className="field-label">Date souhaitée</div>
      <input type="date" className="field-input" min={tomorrow()} value={form.date||""} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/>
      <div className="field-label">Remarques (optionnel)</div>
      <textarea className="field-textarea" rows={2} placeholder="Contre-indications, préférences particulières..." value={form.note||""} onChange={e=>setForm(f=>({...f,note:e.target.value}))}/>
    </>;
    if(t==="personnes-date") return <>
      <div className="sheet-divider"/>
      {service.durations && <>
        <div className="sheet-section">Durée</div>
        <div className="options-row">
          {service.durations.map((d,i)=>(
            <div key={i} className={`option-chip ${form.duree===d?"sel":""}`} onClick={()=>setForm(f=>({...f,duree:d}))}>{d}</div>
          ))}
        </div>
      </>}
      <div className="sheet-section">Nombre de personnes</div>
      <div className="price-row" style={{paddingTop:6}}>
        <div className="price-row-left"><div className="price-row-label">Personnes</div></div>
        <Qty value={form.personnes||1} onChange={v=>setForm(f=>({...f,personnes:Math.max(1,v)}))} min={1}/>
      </div>
      <div style={{height:14}}/>
      <div className="field-label">Date souhaitée</div>
      <input type="date" className="field-input" min={tomorrow()} value={form.date||""} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/>
      <div className="field-label">Remarques (optionnel)</div>
      <textarea className="field-textarea" rows={2} placeholder="Allergies, préférences, occasion particulière..." value={form.note||""} onChange={e=>setForm(f=>({...f,note:e.target.value}))}/>
    </>;
    if(t==="petit-dej") return <>
      <div className="sheet-divider"/>
      <div className="sheet-section">Nombre de petits-déjeuners</div>
      <div className="price-row" style={{paddingTop:6}}>
        <div className="price-row-left"><div className="price-row-label">Petits-déjeuners</div><div className="price-row-val">30 € / personne</div></div>
        <Qty value={form.personnes||1} onChange={v=>setForm(f=>({...f,personnes:Math.max(1,v)}))} min={1}/>
      </div>
      <div style={{height:14}}/>
      <div className="field-label">Date de livraison</div>
      <input type="date" className="field-input" min={tomorrow()} value={form.date||""} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/>
      <div className="field-label">Heure souhaitée <span style={{fontWeight:300,opacity:.6,textTransform:"none",letterSpacing:0}}>(entre 07h et 11h)</span></div>
      <input type="time" className="field-input" min="07:00" max="11:00" value={form.heure||""} onChange={e=>setForm(f=>({...f,heure:e.target.value}))}/>
      <div className="field-label">Remarques (optionnel)</div>
      <textarea className="field-textarea" rows={2} placeholder="Intolérances, préférences particulières..." value={form.note||""} onChange={e=>setForm(f=>({...f,note:e.target.value}))}/>
    </>;
    if(t==="courses") return <>
      <div className="sheet-divider"/>
      <div className="sheet-section">Forfait</div>
      <div className="options-row">
        {service.forfaits.map((fo,i)=>(
          <div key={i} className={`option-chip ${form.forfait===fo?"sel":""}`} onClick={()=>setForm(f=>({...f,forfait:fo}))}>{fo}</div>
        ))}
      </div>
      <div style={{height:6}}/>
      <div className="field-label">Date d'arrivée (livraison avant)</div>
      <input type="date" className="field-input" min={tomorrow()} value={form.date||""} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/>
      <div className="field-label">Votre liste de courses</div>
      <textarea className="field-textarea" rows={3} placeholder="Ex : lait demi-écrémé, pain de mie, œufs (x12), fruits frais, yaourts..." value={form.note||""} onChange={e=>setForm(f=>({...f,note:e.target.value}))}/>
      <div className="field-label">Marques à privilégier (optionnel)</div>
      <textarea className="field-textarea" rows={2} placeholder="Ex : Président pour le beurre, Innocent pour les jus, bio de préférence..." value={form.marques||""} onChange={e=>setForm(f=>({...f,marques:e.target.value}))}/>
    </>;
    if(t==="devis") return <>
      <div className="sheet-divider"/>
      <div className="sheet-section">Personnes & bagages</div>
      <div className="price-row" style={{paddingTop:6}}>
        <div className="price-row-left"><div className="price-row-label">Personnes</div></div>
        <Qty value={form.personnes||1} onChange={v=>setForm(f=>({...f,personnes:Math.max(1,v)}))} min={1}/>
      </div>
      <div className="price-row">
        <div className="price-row-left"><div className="price-row-label">Bagages</div><div className="price-row-val">Valises, sacs, etc.</div></div>
        <Qty value={form.bagages||0} onChange={v=>setForm(f=>({...f,bagages:Math.max(0,v)}))} min={0}/>
      </div>
      <div style={{height:14}}/>
      <div className="field-label">Date & heure d'arrivée</div>
      <input type="datetime-local" className="field-input" min={tomorrow()+"T00:00"} value={form.date||""} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/>
      <div className="field-label">Remarques (optionnel)</div>
      <textarea className="field-textarea" rows={2} placeholder="Numéro de vol, besoins particuliers..." value={form.note||""} onChange={e=>setForm(f=>({...f,note:e.target.value}))}/>
    </>;
    if(t==="menage") return <>
      <div className="sheet-divider"/>
      <div className="sheet-section">Nombre de passages</div>
      <div className="price-row" style={{paddingTop:6}}>
        <div className="price-row-left"><div className="price-row-label">Passages ménage</div><div className="price-row-val">90 € / intervention</div></div>
        <Qty value={form.nb||1} onChange={v=>setForm(f=>({...f,nb:Math.max(1,v)}))} min={1}/>
      </div>
      <div style={{height:10}}/>
      <div className="sheet-section">Changement de linge</div>
      <div className="options-row">
        {["Oui, inclure le changement","Non merci"].map((opt,i)=>(
          <div key={i} className={`option-chip ${form.linge===opt?"sel":""}`} onClick={()=>setForm(f=>({...f,linge:opt}))}>{opt}</div>
        ))}
      </div>
      <div className="field-label">Date souhaitée</div>
      <input type="date" className="field-input" min={tomorrow()} value={form.date||""} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/>
      <div className="field-label">Remarques (optionnel)</div>
      <textarea className="field-textarea" rows={2} placeholder="Préférences ou instructions particulières..." value={form.note||""} onChange={e=>setForm(f=>({...f,note:e.target.value}))}/>
    </>;
    if(t==="dates-seules") return <>
      <div className="sheet-divider"/>
      <div className="sheet-section">{service.nbLabel||"Nombre d'interventions"}</div>
      <div className="price-row" style={{paddingTop:6}}>
        <div className="price-row-left"><div className="price-row-label">{service.nbLabel||"Interventions"}</div></div>
        <Qty value={form.nb||1} onChange={v=>setForm(f=>({...f,nb:Math.max(1,v)}))} min={1}/>
      </div>
      <div style={{height:14}}/>
      <div className="field-label">Date souhaitée</div>
      <input type="date" className="field-input" min={tomorrow()} value={form.date||""} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/>
      <div className="field-label">Remarques (optionnel)</div>
      <textarea className="field-textarea" rows={2} placeholder="Préférences ou instructions particulières..." value={form.note||""} onChange={e=>setForm(f=>({...f,note:e.target.value}))}/>
    </>;
    return null;
  };

  const buildRecap = (service, form) => {
    const rows = [];
    if(form.date) rows.push({l:"Date", v:new Date(form.date).toLocaleDateString("fr-FR")});
    if(form.heure) rows.push({l:"Heure", v:form.heure});
    if(form.personnes) rows.push({l:"Personnes", v:form.personnes});
    if(form.duree) rows.push({l:"Format", v:form.duree});
    if(form.forfait) rows.push({l:"Forfait", v:form.forfait});
    if(form.nb) rows.push({l:"Quantité", v:form.nb});
    if(form.linge) rows.push({l:"Linge", v:form.linge});
    if(form.bagages) rows.push({l:"Bagages", v:form.bagages});
    if(form.quantities) {
      const q = Object.entries(form.quantities).filter(([_,v])=>v>0).map(([k,v])=>`${v}x ${k}`).join(", ");
      if(q) rows.push({l:"Sélection", v:q});
    }
    if(form.note) rows.push({l:"Notes", v:form.note.substring(0,30)+"..."});
    return rows;
  };

  return (
    <>
      <div className="sheet-overlay" onClick={onClose}/>
      <div className="sheet">
        <div className="sheet-handle"/>
        <div className="sheet-title">{service.title}</div>
        <div className="sheet-desc">{service.desc}</div>
        {renderFields()}
        <div style={{height:24}}/>
        <button className="btn-primary" onClick={()=>{ onSubmit(service.title, buildRecap(service, form)); onClose(); }}>Demander (sans engagement)</button>
      </div>
    </>
  );
}

function Chat({onClose, conciergeMode=false, lang="fr"}) {
  const tl = useT(lang);
  const [msg,setMsg] = useState("");
  const [msgs,setMsgs] = useState([
    {tx:false, text:conciergeMode?"Bonjour, comment puis-je vous aider ?":"Bonjour, je suis votre concierge dédié. Comment puis-je rendre votre séjour plus agréable ?"}
  ]);
  const send = () => { if(msg.trim()) { setMsgs([...msgs,{tx:true,text:msg.trim()}]); setMsg(""); } };
  return (
    <div style={{position:"absolute",inset:0,background:"#fff",zIndex:100,display:"flex",flexDirection:"column",animation:"fi .2s ease"}}>
      <div className="chat-hdr">
        <button className="chat-back" onClick={onClose}>←</button>
        <div className="chat-title">{conciergeMode?"Anne-Claire (Bwa Kanpech)":"Concierge Inhérence"}<div style={{fontSize:10,color:"#4CAF50",fontFamily:"'Montserrat',sans-serif",marginTop:2,letterSpacing:".05em"}}>{tl("chat_dispo")}</div></div>
        <div style={{width:20}}/>
      </div>
      <div className="chat-body">
        <div style={{textAlign:"center",fontSize:10,color:"#9A8F7E",margin:"10px 0"}}>Aujourd'hui, 09:41</div>
        {msgs.map((m,i)=>(<div key={i} className={`chat-bubble ${m.tx?"tx":"rx"}`}>{m.text}</div>))}
      </div>
      <div className="chat-input-area">
        <input className="chat-input" placeholder={tl("chat_ph")} value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}/>
        <button className="chat-send" onClick={send} style={{opacity:msg.trim()?1:.5}}>➤</button>
      </div>
    </div>
  );
}

function ActivitesPage({onNotif, lang="fr"}) {
  const tl = useT(lang);
  const [selCat,setSelCat] = useState("Nautisme & Océan");
  const [req,setReq] = useState(false);
  const [form,setForm] = useState({});
  if(req) return (
    <div style={{position:"absolute",inset:0,background:"#FAF8F3",zIndex:50,display:"flex",flexDirection:"column",animation:"fi .2s ease"}}>
      <div style={{padding:"16px 22px 14px",background:"#fff",borderBottom:"1px solid rgba(46,60,77,0.05)",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={()=>setReq(false)} style={{background:"none",border:"none",fontSize:20,color:"#2E3C4D",cursor:"pointer"}}>←</button>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:300,color:"#2E3C4D",fontStyle:"italic"}}>{tl("act_nouvelle")}</div>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"24px 22px"}}>
        <div style={{fontSize:11,color:"#2E7D32",background:"#E8F5E9",padding:"10px 14px",borderRadius:8,marginBottom:20,display:"flex",gap:8,alignItems:"center"}}>
          <span style={{fontSize:14}}>✨</span><span>{tl("act_reponse")}</span>
        </div>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,color:"#2E3C4D",marginBottom:20,fontWeight:400}}>{tl("act_composons")}</div>
        <div className="field-label">{tl("act_activite_label")} *</div>
        <textarea className="field-textarea" rows={3} placeholder={tl("act_activite_ph")} value={form.act||""} onChange={e=>setForm(f=>({...f,act:e.target.value}))}/>
        <div style={{display:"flex",gap:12,marginBottom:16}}>
          <div style={{flex:1}}><div className="field-label">{tl("act_participants")}</div><input type="number" className="field-input" style={{marginBottom:0}} value={form.pax||""} onChange={e=>setForm(f=>({...f,pax:e.target.value}))}/></div>
          <div style={{flex:1}}><div className="field-label">{tl("act_budget")}</div><input type="text" className="field-input" placeholder="Ex: 100€" style={{marginBottom:0}} value={form.budget||""} onChange={e=>setForm(f=>({...f,budget:e.target.value}))}/></div>
        </div>
        <div style={{display:"flex",gap:12,marginBottom:16}}>
          <div style={{flex:1}}><div className="field-label">{tl("act_date")}</div><input type="date" className="field-input" style={{marginBottom:0}} value={form.date||""} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/></div>
          <div style={{flex:1}}><div className="field-label">{tl("act_heure")} <span style={{fontWeight:300,fontSize:9,opacity:.6}}>{tl("act_heure_opt")}</span></div><input type="time" className="field-input" style={{marginBottom:0}} value={form.time||""} onChange={e=>setForm(f=>({...f,time:e.target.value}))}/></div>
        </div>
        <div className="field-label">{tl("act_ambiance")}</div>
        <textarea className="field-textarea" rows={2} placeholder={tl("act_ambiance_ph")} value={form.ambiance||""} onChange={e=>setForm(f=>({...f,ambiance:e.target.value}))}/>
        <div style={{fontSize:10,color:"#9A8F7E",fontStyle:"italic",marginTop:-8,marginBottom:24}}>{tl("act_ambiance_tip")}</div>
        <button className="btn-primary" style={{opacity:form.act?.trim()?1:.5}} onClick={()=>{
          if(form.act?.trim()){
            onNotif("Activité sur-mesure", [{l:"Demande",v:form.act},{l:"Date",v:form.date||"A définir"}]);
            setReq(false); setForm({});
          } else { alert(tl("act_completer")); }
        }}>{tl("act_envoyer")}</button>
      </div>
    </div>
  );
  return (
    <>
      <div className="sec" style={{marginTop:16}}><div className="sec-title">{tl("sur_mesure")}</div><div className="sec-line"><div className="ocre-bar"/><span className="sec-sub">{tl("vos_activites")}</span></div></div>
      <div style={{padding:"0 22px 16px",fontSize:11,color:"#9A8F7E",lineHeight:1.5,fontWeight:300}}>
        {tl("act_intro")}<br/><span style={{color:"#C9A96E"}}>{tl("act_qualite")}</span>
      </div>
      <div className="act-cat-list">
        {ACTIVITIES.map((c,i)=>(<div key={i} className={`act-cat ${selCat===c.title?"sel":""}`} onClick={()=>setSelCat(c.title)}>{c.title}</div>))}
      </div>
      {ACTIVITIES.filter(c=>c.title===selCat).map((c,i)=>(
        <div key={i} className="act-card">
          <img src={c.img} className="act-img" alt=""/>
          <div className="act-body">
            <div className="act-title">{c.title}</div>
            <div className="act-desc">{c.desc}</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:16}}>
              {c.tags.map((t,j)=>(<span key={j} style={{fontSize:9,padding:"4px 8px",background:"#F5ECD8",color:"#C9A96E",borderRadius:4,letterSpacing:".05em"}}>{t}</span>))}
            </div>
            <button className="btn-primary" onClick={()=>setReq(true)}>✦ Composer mon expérience</button>
          </div>
        </div>
      ))}
      <div style={{padding:"0 22px 24px",textAlign:"center"}}>
        <div style={{fontSize:10,color:"#9A8F7E",fontStyle:"italic",fontWeight:300}}>{tl("act_messagerie")}</div>
      </div>
    </>
  );
}

const LEGAL_TEXT = `Mentions Légales & Conditions Générales... (Ce texte a été raccourci)`;

function ProfileTab({onLogout, sejourTermine=false, onPrefsSaved, lang="fr"}) {
  const tl = useT(lang);
  const [section,setSection] = useState(null);
  const [allergies,setAllergies] = useState(["Gluten"]);
  const [customAllergie,setCustomAllergie] = useState("");
  const [showCustomAllergie,setShowCustomAllergie] = useState(false);
  const [indispensables,setIndispensables] = useState(["Climatisation à l'arrivée"]);
  const [musique,setMusique] = useState([]);
  const [compte,setCompte] = useState({prenom:"Anne-Claire",nom:"Dupont",email:"anneclaire@email.com",tel:"+596 696 12 34 56"});
  
  const toggleAllergie = (a) => setAllergies(prev => prev.includes(a) ? prev.filter(x=>x!==a) : [...prev,a]);
  const toggleIndispensable = (a) => setIndispensables(prev => prev.includes(a) ? prev.filter(x=>x!==a) : [...prev,a]);
  const toggleMusique = (a) => setMusique(prev => prev.includes(a) ? prev.filter(x=>x!==a) : [...prev,a]);
  const addCustomAllergie = () => { if(customAllergie.trim()){ setAllergies(prev=>[...prev,customAllergie.trim()]); setCustomAllergie(""); setShowCustomAllergie(false); }};

  if(section==="compte") return <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
    <div style={{display:"flex",alignItems:"center",gap:12,padding:"16px 22px 14px",borderBottom:"1px solid rgba(46,60,77,0.07)"}}>
      <button onClick={()=>setSection(null)} style={{background:"none",border:"none",fontSize:20,color:"#2E3C4D",cursor:"pointer"}}>←</button>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:300,color:"#2E3C4D",fontStyle:"italic"}}>{tl("gerer_compte")}</div>
    </div>
    <div style={{flex:1,overflowY:"auto",padding:"20px 22px",scrollbarWidth:"none"}}>
      {[["Prénom","prenom"],["Nom","nom"],["Email","email"],["Téléphone","tel"]].map(([lbl,key])=>(
        <div key={key} style={{marginBottom:14}}>
          <div style={{fontSize:9,letterSpacing:".18em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:5,fontWeight:400}}>{lbl}</div>
          <input style={{width:"100%",padding:"12px 14px",borderRadius:10,border:"1px solid rgba(46,60,77,0.1)",background:"#fff",fontFamily:"'Montserrat',sans-serif",fontSize:12,color:"#2E3C4D",outline:"none",fontWeight:300}} value={compte[key]} onChange={e=>setCompte(c=>({...c,[key]:e.target.value}))}/>
        </div>
      ))}
      <button style={{width:"100%",padding:"13px",borderRadius:12,border:"none",background:"#2E3C4D",color:"#E3C191",fontFamily:"'Montserrat',sans-serif",fontSize:10,fontWeight:400,letterSpacing:".18em",textTransform:"uppercase",cursor:"pointer",marginTop:6}}> {tl("enregistrer_modifs")} </button>
      <div style={{height:24}}/><div style={{height:"1px",background:"rgba(46,60,77,0.07)",marginBottom:20}}/>
      <div style={{textAlign:"center"}}><span style={{fontSize:10,color:"#E57373",fontWeight:300,letterSpacing:".06em",cursor:"pointer",borderBottom:"1px solid rgba(229,115,115,0.3)",paddingBottom:2}}> {tl("supprimer_compte")} </span></div>
    </div>
  </div>;

  if(section==="legal") return <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
    <div style={{display:"flex",alignItems:"center",gap:12,padding:"16px 22px 14px",borderBottom:"1px solid rgba(46,60,77,0.07)"}}>
      <button onClick={()=>setSection(null)} style={{background:"none",border:"none",fontSize:20,color:"#2E3C4D",cursor:"pointer"}}>←</button>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:300,color:"#2E3C4D",fontStyle:"italic"}}>{tl("legal")}</div>
    </div>
    <div style={{flex:1,overflowY:"auto",padding:"20px 22px",scrollbarWidth:"none"}}>
      <div style={{fontSize:11,color:"#2E3C4D",lineHeight:2,fontWeight:300,whiteSpace:"pre-line"}}>{LEGAL_TEXT}</div>
      <div style={{height:20}}/>
    </div>
  </div>;

  if(section==="documents") return (
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,padding:"16px 22px 14px",borderBottom:"1px solid rgba(46,60,77,0.07)"}}>
        <button onClick={()=>setSection(null)} style={{background:"none",border:"none",fontSize:20,color:"#2E3C4D",cursor:"pointer"}}>←</button>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:300,color:"#2E3C4D",fontStyle:"italic"}}>Mes Documents</div>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"20px 22px"}}>
        <div style={{fontSize:11,color:"#9A8F7E",textAlign:"center",marginTop:20,fontStyle:"italic"}}>
          Vos devis, factures et documents importants apparaîtront ici.
        </div>
      </div>
    </div>
  );

  if(section==="prefs") return <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
    <div style={{display:"flex",alignItems:"center",gap:12,padding:"16px 22px 14px",borderBottom:"1px solid rgba(46,60,77,0.07)"}}>
      <button onClick={()=>setSection(null)} style={{background:"none",border:"none",fontSize:20,color:"#2E3C4D",cursor:"pointer"}}>←</button>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:300,color:"#2E3C4D",fontStyle:"italic"}}>{tl("mes_prefs")}</div>
    </div>
    <div style={{flex:1,overflowY:"auto",padding:"20px 22px",scrollbarWidth:"none"}}>
      <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:10,fontWeight:400}}>{tl("allergies_lbl")}</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:10}}>
        {["Gluten","Lactose","Arachides","Fruits à coque"].map((a,i)=>(
          <div key={i} onClick={()=>toggleAllergie(a)} style={{padding:"7px 12px",borderRadius:2,border:`1px solid ${allergies.includes(a)?"#E57373":"rgba(46,60,77,0.12)"}`,background:allergies.includes(a)?"#FFEBEE":"#fff",cursor:"pointer",fontSize:11,color:allergies.includes(a)?"#C62828":"#2E3C4D",fontWeight:300,transition:"all .15s"}}>{a}</div>
        ))}
        {allergies.filter(a=>!["Gluten","Lactose","Arachides","Fruits à coque"].includes(a)).map((a,i)=>(
          <div key={"c"+i} onClick={()=>toggleAllergie(a)} style={{padding:"7px 12px",borderRadius:2,border:"1px solid #E57373",background:"#FFEBEE",cursor:"pointer",fontSize:11,color:"#C62828",fontWeight:300,transition:"all .15s"}}>{a}</div>
        ))}
        {!showCustomAllergie && <div onClick={()=>setShowCustomAllergie(true)} style={{padding:"7px 12px",borderRadius:2,border:"1px dashed rgba(46,60,77,0.3)",background:"transparent",cursor:"pointer",fontSize:11,color:"#9A8F7E",fontWeight:300}}>+ Autre</div>}
      </div>
      {showCustomAllergie&&<div style={{display:"flex",gap:8,marginBottom:24,animation:"fi .2s ease"}}>
        <input className="field-input" style={{marginBottom:0,padding:"8px 12px",minHeight:36}} placeholder="Précisez..." value={customAllergie} onChange={e=>setCustomAllergie(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addCustomAllergie()}/>
        <button onClick={addCustomAllergie} style={{background:"#2E3C4D",color:"#E3C191",border:"none",borderRadius:8,padding:"0 14px",fontSize:10,fontWeight:500,textTransform:"uppercase",letterSpacing:".05em",cursor:"pointer"}}>OK</button>
      </div>}
      <div style={{height:14}}/>
      <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:6,fontWeight:400}}>{tl("indispensables_lbl")}</div>
      <div style={{fontSize:10,color:"#9A8F7E",marginBottom:12,fontStyle:"italic",lineHeight:1.4}}>{tl("indispensables_note")}</div>
      <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:24}}>
        {["Climatisation à l'arrivée","Lumières douces","Panier de fruits locaux","Bouteille d'eau au frais"].map((a,i)=>(
          <div key={i} onClick={()=>toggleIndispensable(a)} style={{padding:"12px 14px",borderRadius:10,border:`1px solid ${indispensables.includes(a)?"#E3C191":"rgba(46,60,77,0.1)"}`,background:indispensables.includes(a)?"#F5ECD8":"#fff",cursor:"pointer",display:"flex",alignItems:"center",gap:12,transition:"all .2s"}}>
            <div className={`q-check ${indispensables.includes(a)?"checked":""}`}>{indispensables.includes(a)&&<span className="q-check-icon">✓</span>}</div>
            <span style={{fontSize:11,color:indispensables.includes(a)?"#C9A96E":"#2E3C4D",fontWeight:indispensables.includes(a)?500:300}}>{a}</span>
          </div>
        ))}
      </div>
      <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:6,fontWeight:400}}>{tl("musique_lbl")}</div>
      <div style={{fontSize:10,color:"#9A8F7E",marginBottom:12,fontStyle:"italic",lineHeight:1.4}}>{tl("musique_note")}</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:30}}>
        {["Jazz","Classique","Lounge / Chill","Bossa Nova","Caribéenne","Pop Acoustic","Soul"].map((a,i)=>(
          <div key={i} onClick={()=>toggleMusique(a)} style={{padding:"7px 12px",borderRadius:20,border:`1px solid ${musique.includes(a)?"#E3C191":"rgba(46,60,77,0.12)"}`,background:musique.includes(a)?"#2E3C4D":"#fff",cursor:"pointer",fontSize:11,color:musique.includes(a)?"#E3C191":"#2E3C4D",fontWeight:300,transition:"all .15s"}}>{a}</div>
        ))}
      </div>
      <button onClick={()=>{if(onPrefsSaved)onPrefsSaved();setSection(null);}} style={{width:"100%",padding:"13px",borderRadius:12,border:"none",background:"#2E3C4D",color:"#E3C191",fontFamily:"'Montserrat',sans-serif",fontSize:10,fontWeight:400,letterSpacing:".18em",textTransform:"uppercase",cursor:"pointer",marginBottom:20}}> {tl("enregistrer_prefs")} </button>
    </div>
  </div>;

  return (
    <>
      <div className="profile-hero"><img src={IZENTHAI} className="ph-img" alt=""/><div className="prof-av">AD</div><div className="prof-name">{compte.prenom} {compte.nom}</div><div className="prof-plan">{sejourTermine?tl("voy_passe"):"Voyageur"} · Martinique</div></div>
      <div className="sec"><div className="sec-title">{tl("mon_compte")}</div><div className="sec-line"><div className="ocre-bar"/></div></div>
      <div className="card" onClick={()=>setSection("compte")} style={{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><div style={{fontSize:12,color:"#2E3C4D",fontWeight:500,marginBottom:4}}>{tl("gerer_compte")}</div><div style={{fontSize:10,color:"#9A8F7E",fontWeight:300}}>{tl("nom_email_tel")}</div></div>
        <span style={{color:"#9A8F7E"}}>→</span>
      </div>
      <div className="card" onClick={()=>setSection("prefs")} style={{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><div style={{fontSize:12,color:"#2E3C4D",fontWeight:500,marginBottom:4}}>{tl("mes_prefs")}</div><div style={{fontSize:10,color:"#9A8F7E",fontWeight:300}}>{tl("allergies_indisp")}</div></div>
        <span style={{color:"#9A8F7E"}}>→</span>
      </div>
      <div className="sec"><div className="sec-title">{tl("assistance")}</div><div className="sec-line"><div className="ocre-bar"/></div></div>
      <div style={{padding:"0 22px 20px"}}>
        <div onClick={()=>setSection("documents")} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 0",borderBottom:"1px solid rgba(46,60,77,0.08)",cursor:"pointer"}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <span style={{fontSize:18}}>📄</span>
            <span style={{fontSize:13,color:"#2E3C4D",fontWeight:300}}>Mes Documents</span>
          </div>
          <span style={{color:"#9A8F7E"}}>→</span>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 0",borderBottom:"1px solid rgba(46,60,77,0.08)",cursor:"pointer"}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}><span style={{fontSize:18}}>💬</span><span style={{fontSize:13,color:"#2E3C4D",fontWeight:300}}>{tl("contactez_nous")}</span></div>
        </div>
        <div onClick={()=>setSection("legal")} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 0",borderBottom:"1px solid rgba(46,60,77,0.08)",cursor:"pointer"}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}><span style={{fontSize:18}}>⚖️</span><span style={{fontSize:13,color:"#2E3C4D",fontWeight:300}}>{tl("legal")} & {tl("rgpd")}</span></div><span style={{color:"#9A8F7E"}}>→</span>
        </div>
        <div onClick={onLogout} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 0",cursor:"pointer"}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}><span style={{fontSize:18,opacity:.7}}>🚪</span><span style={{fontSize:13,color:"#2E3C4D",fontWeight:300}}>{tl("deconnecter")}</span></div>
        </div>
      </div>
      {sejourTermine && (
        <div style={{margin:"0 22px 20px",padding:"16px",background:"#fff",borderRadius:"14px",textAlign:"center",boxShadow:"0 4px 15px rgba(0,0,0,0.02)"}}>
          <div style={{fontSize:24,marginBottom:8}}>⭐</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"#2E3C4D",marginBottom:4}}>{tl("avis_google")}</div>
          <div style={{fontSize:10,color:"#9A8F7E",marginBottom:12,fontWeight:300}}>{tl("avis_sub")}</div>
          <button style={{padding:"10px 20px",borderRadius:8,border:"1px solid #2E3C4D",background:"transparent",color:"#2E3C4D",fontSize:11,textTransform:"uppercase",letterSpacing:".05em",cursor:"pointer",fontWeight:500}}>{tl("votre_experience")}</button>
        </div>
      )}
      <div style={{height:40}}/>
    </>
  );
}

function ResidentApp({onNotif, bookings, onLogout, lang="fr"}) {
  const tl = useT(lang);
  const [tab, setTab] = useState("home");
  const [chat, setChat] = useState(false);
  const [sheet, setSheet] = useState(null);
  const [showQ, setShowQ] = useState(false);
  const [qDone, setQDone] = useState(false);
  const sent = bookings.reduce((acc,b)=>{if(b.status==="pending") acc[b.service]=true; return acc;},{});

  return (
    <>
      <div style={{flex:1,overflowY:"auto",scrollbarWidth:"none"}}>
        {tab==="home"&&<>
          <div className="hero"><div className="hero-ring"/><div className="hero-ring2"/><div className="hero-tag">{tl("votre_residence")}</div><div className="hero-name">{tl("bienvenue")} Anne-Claire</div><div className="hero-badge"><div className="hero-dot"/><span>{tl("sejour_actif")}</span></div></div>
          <div className="sec"><div className="sec-title">{tl("votre_sejour")}</div><div className="sec-line"><div className="ocre-bar"/></div></div>
          <div className="card" onClick={()=>setTab("villa")} style={{cursor:"pointer"}}>
            <div className="card-row"><span className="card-lbl">{tl("villa_lbl")}</span><span className="card-val">Bwa Kanpech</span></div>
            <div className="card-row"><span className="card-lbl">{tl("checkin_lbl")}</span><span className="card-val">14 mars 2026<br/><span style={{fontSize:9,color:"#9A8F7E"}}>à partir de 15:00</span></span></div>
            <div className="card-row"><span className="card-lbl">{tl("checkout_lbl")}</span><span className="card-val">21 mars 2026<br/><span style={{fontSize:9,color:"#9A8F7E"}}>avant 11:00</span></span></div>
          </div>
          <div className="sec" style={{marginTop:16}}><div className="sec-title">{tl("action_requise")}</div><div className="sec-line"><div className="ocre-bar"/></div></div>
          {qDone?(
            <div className="card" style={{background:"#E8F5E9",borderColor:"rgba(76,175,80,0.2)",borderWidth:1,borderStyle:"solid"}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:34,height:34,borderRadius:10,background:"#fff",display:"flex",justifyContent:"center",alignItems:"center",fontSize:16,color:"#4CAF50",flexShrink:0}}>📋</div>
                <div><div style={{fontSize:12,color:"#2E7D32",fontWeight:500,marginBottom:2}}>{tl("fiche_complete")}</div><div style={{fontSize:10,color:"#4CAF50",fontWeight:300}}>Merci d'avoir préparé votre arrivée.</div></div>
              </div>
            </div>
          ):(
            <div className="card" onClick={()=>setShowQ(true)} style={{cursor:"pointer",background:"#2E3C4D"}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:34,height:34,borderRadius:10,background:"rgba(250,248,243,0.1)",display:"flex",justifyContent:"center",alignItems:"center",fontSize:16,color:"#E3C191",flexShrink:0}}>📋</div>
                <div style={{flex:1}}><div style={{fontSize:12,color:"#FAF8F3",fontWeight:500,marginBottom:4}}>{tl("questionnaire_lbl")}</div><div style={{fontSize:10,color:"#E3C191",fontWeight:300}}>{tl("questionnaire_required")}</div></div>
                <span style={{color:"#E3C191"}}>→</span>
              </div>
            </div>
          )}
          <div className="sec" style={{marginTop:16}}><div className="sec-title">{tl("messagerie")}</div><div className="sec-line"><div className="ocre-bar"/></div></div>
          <div className="card" onClick={()=>setChat(true)} style={{cursor:"pointer"}}>
            <div className="msg-item"><div className="msg-av" style={{padding:4,background:"#2E3C4D",overflow:"hidden"}}><img src={ILI} style={{width:"100%",height:"100%",objectFit:"contain",filter:"brightness(0) invert(1)"}}/></div><div style={{flex:1,minWidth:0}}><div className="msg-name">Concierge Inhérence</div><div className="msg-prev">{tl("concierge_dispo")}</div></div></div>
          </div>
          <div style={{height:20}}/>
        </>}
        {tab==="villa"&&<>
          <div className="hero"><div className="hero-ring"/><div className="hero-ring2"/><div className="hero-tag">{tl("votre_havre")}</div><div className="hero-name">Bwa Kanpech</div><div className="hero-badge"><div className="hero-dot"/><span>Le Vauclin · Martinique</span></div></div>
          <img src={IV} style={{width:"100%",height:220,objectFit:"cover"}} alt=""/>
          <div className="sec"><div className="sec-title">Informations de la villa</div><div className="sec-line"><div className="ocre-bar"/></div></div>
          <div className="card" style={{cursor:"default"}}>
            {VILLA_DATA.bwakanpech.infos.map((info,i)=>(
              <div className="card-row" key={i} style={{flexDirection:"column",alignItems:"flex-start",gap:6}}>
                <span className="card-lbl" style={{color:"#2E3C4D",fontWeight:500}}>{info.title}</span>
                <span className="card-val" style={{textAlign:"left",color:"#9A8F7E",whiteSpace:"pre-line",lineHeight:1.4}}>{info.content}</span>
              </div>
            ))}
          </div>
          <div className="sec"><div className="sec-title">Tutoriels vidéos</div><div className="sec-line"><div className="ocre-bar"/></div></div>
          <div className="card">
            {VILLA_DATA.bwakanpech.tutos.map((tuto,i)=>(
              <div className="card-row" key={i} onClick={()=>window.open(tuto.url,"_blank")} style={{cursor:"pointer"}}>
                <span className="card-val" style={{textAlign:"left",textDecoration:"underline",color:"#C9A96E"}}>{tuto.label}</span>
                <span style={{color:"#9A8F7E"}}>↗</span>
              </div>
            ))}
          </div>
          <div style={{height:20}}/>
        </>}
        {tab==="services"&&<>
          <div className="hero"><div className="hero-ring"/><div className="hero-ring2"/><div className="hero-tag">{tl("nos_services")}</div><div className="hero-name">{tl("enrichissez")}</div><div className="hero-badge"><div className="hero-dot"/><span>{tl("reservez")}</span></div></div>
          {bookings.length>0&&<div style={{padding:"20px 22px 0"}}><div style={{fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:12,fontWeight:500}}>Vos demandes</div>{bookings.map((b,i)=>(<div key={i} style={{display:"flex",alignItems:"center",gap:10,background:"#fff",padding:"12px 16px",borderRadius:12,marginBottom:8,border:"1px solid rgba(46,60,77,0.05)"}}><div style={{width:8,height:8,borderRadius:"50%",background:b.status==="pending"?"#E3C191":b.status==="accepted"?"#4CAF50":"#E57373"}}/> <div style={{flex:1}}><div style={{fontSize:12,color:"#2E3C4D",fontWeight:500,marginBottom:2}}>{b.service}</div><div style={{fontSize:10,color:"#9A8F7E"}}>{b.status==="pending"?tl("en_attente"):b.status==="accepted"?tl("confirme"):tl("non_dispo")}</div></div></div>))}</div>}
          <div className="sec"><div className="sec-title">Catalogue</div><div className="sec-line"><div className="ocre-bar"/><span className="sec-sub">{tl("cliquez_reserver")}</span></div></div>
          {[[SERVICES.slice(0,3),"Arrivée & Essentiels"],[SERVICES.slice(3,6),"Bien-être & Confort"],[SERVICES.slice(6,9),"Mobilité & Enfants"]].map(([grp,tit],idx)=>(
            <div key={idx}>
              <div style={{fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",margin:"10px 22px",fontWeight:500}}>{tit}</div>
              <div className="service-list">
                {grp.map(s=>(
                  <div className="service-card" key={s.id} onClick={()=>setSheet(s)}>
                    <img src={s.img} className="service-img" alt=""/>
                    <div className="service-body">
                      <div className="service-title">{s.title}</div>
                      <div className="service-desc">{s.desc}</div>
                      <div className="service-ftr">
                        <div className="service-tag">{sent[s.title]?tl("demande_envoyee_srv"):tl("voir_reserver")}</div>
                        <div className="service-price">{s.startingPrice}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{height:16}}/>
        </>}
        {tab==="activites"&&<ActivitesPage onNotif={onNotif} lang={lang}/>}
        {tab==="profile"&&<ProfileTab onLogout={onLogout} onPrefsSaved={()=>setTab("home")} lang={lang}/>}
      </div>
      {showQ&&<Questionnaire lang={lang} onClose={()=>setShowQ(false)} onComplete={(d)=>{onNotif("__fiche__",d);setQDone(true);setShowQ(false);}}/>}
      {sheet&&<ServiceSheet service={sheet} onClose={()=>setSheet(null)} onSubmit={onNotif}/>}
      {chat&&<Chat onClose={()=>setChat(false)} lang={lang}/>}
      <div className="tab-bar">
        <div className={`tab-item ${tab==="home"?"active":""}`} onClick={()=>setTab("home")}><span className="tab-icon">✧</span><span className="tab-label">{tl("tab_home")}</span></div>
        <div className={`tab-item ${tab==="villa"?"active":""}`} onClick={()=>setTab("villa")}><span className="tab-icon">🗝</span><span className="tab-label">{tl("tab_villa")}</span></div>
        <div className={`tab-item ${tab==="services"?"active":""}`} onClick={()=>setTab("services")}><span className="tab-icon">🛎</span><span className="tab-label">{tl("tab_services")}</span></div>
        <div className={`tab-item ${tab==="activites"?"active":""}`} onClick={()=>setTab("activites")}><span className="tab-icon">🌴</span><span className="tab-label">{tl("tab_activites")}</span></div>
        <div className={`tab-item ${tab==="profile"?"active":""}`} onClick={()=>setTab("profile")}><span className="tab-icon">👤</span><span className="tab-label">{tl("tab_profile")}</span></div>
      </div>
    </>
  );
}

function VoyageurApp({onNotif, bookings, onLogout, lang="fr"}) {
  const tl = useT(lang);
  const [tab, setTab] = useState("home");
  const [chat, setChat] = useState(false);
  const [sheet, setSheet] = useState(null);
  const [showQ, setShowQ] = useState(false);
  const [qDone, setQDone] = useState(false);
  const [popupFin, setPopupFin] = useState(true);
  const sent = bookings.reduce((acc,b)=>{if(b.status==="pending") acc[b.service]=true; return acc;},{});
  const sejourTermine = true; 

  return (
    <>
      <div style={{flex:1,overflowY:"auto",scrollbarWidth:"none"}}>
        {tab==="home"&&<>
          <div className="hero"><div className="hero-ring"/><div className="hero-ring2"/><div className="hero-tag">{tl("votre_sejour")}</div><div className="hero-name">{tl("bienvenue")} Thomas</div><div className="hero-badge"><div className="hero-dot"/><span>{sejourTermine?tl("sejour_termine"):tl("sejour_avenir")}</span></div></div>
          {sejourTermine && popupFin && (
            <div style={{position:"absolute",inset:0,background:"rgba(46,60,77,0.6)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"fi .3s ease"}}>
              <div style={{background:"#FAF8F3",borderRadius:20,padding:24,width:"100%",boxShadow:"0 10px 30px rgba(0,0,0,0.2)",position:"relative"}}>
                <div style={{fontSize:32,marginBottom:12,textAlign:"center"}}>🌅</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:"#2E3C4D",marginBottom:8,textAlign:"center",fontWeight:400}}>{tl("popup_titre")}</div>
                <div style={{fontSize:11,color:"#9A8F7E",lineHeight:1.5,marginBottom:20,textAlign:"center",fontWeight:300}}>{tl("popup_sub")}</div>
                <div style={{background:"#fff",border:"1px solid rgba(46,60,77,0.05)",borderRadius:12,padding:"14px",marginBottom:24}}>
                  <div style={{fontSize:10,color:"#9A8F7E",textTransform:"uppercase",letterSpacing:".1em",marginBottom:6}}>{tl("popup_acces")}</div>
                  <div style={{fontSize:14,color:"#2E3C4D",fontWeight:500}}>28 mars 2026</div>
                </div>
                <button onClick={()=>setPopupFin(false)} style={{width:"100%",padding:"14px",borderRadius:12,border:"none",background:"#2E3C4D",color:"#E3C191",fontFamily:"'Montserrat',sans-serif",fontSize:11,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",cursor:"pointer"}}>{tl("popup_compris")}</button>
              </div>
            </div>
          )}
          <div className="sec"><div className="sec-title">{tl("votre_programme")}</div><div className="sec-line"><div className="ocre-bar"/></div></div>
          <div className="card" style={{cursor:"default"}}>
            <div className="card-row"><span className="card-lbl">Destination</span><span className="card-val">Martinique</span></div>
            <div className="card-row"><span className="card-lbl">{tl("checkin_lbl")}</span><span className="card-val">14 mars 2026</span></div>
            <div className="card-row"><span className="card-lbl">{tl("checkout_lbl")}</span><span className="card-val">21 mars 2026</span></div>
          </div>
          {!sejourTermine && (
            <>
              <div className="sec" style={{marginTop:16}}><div className="sec-title">{tl("action_requise")}</div><div className="sec-line"><div className="ocre-bar"/></div></div>
              {qDone?(
                <div className="card" style={{background:"#E8F5E9",borderColor:"rgba(76,175,80,0.2)",borderWidth:1,borderStyle:"solid"}}>
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <div style={{width:34,height:34,borderRadius:10,background:"#fff",display:"flex",justifyContent:"center",alignItems:"center",fontSize:16,color:"#4CAF50",flexShrink:0}}>📋</div>
                    <div><div style={{fontSize:12,color:"#2E7D32",fontWeight:500,marginBottom:2}}>{tl("fiche_complete")}</div><div style={{fontSize:10,color:"#4CAF50",fontWeight:300}}>Merci d'avoir préparé votre arrivée.</div></div>
                  </div>
                </div>
              ):(
                <div className="card" onClick={()=>setShowQ(true)} style={{cursor:"pointer",background:"#2E3C4D"}}>
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <div style={{width:34,height:34,borderRadius:10,background:"rgba(250,248,243,0.1)",display:"flex",justifyContent:"center",alignItems:"center",fontSize:16,color:"#E3C191",flexShrink:0}}>📋</div>
                    <div style={{flex:1}}><div style={{fontSize:12,color:"#FAF8F3",fontWeight:500,marginBottom:4}}>{tl("questionnaire_lbl")}</div><div style={{fontSize:10,color:"#E3C191",fontWeight:300}}>{tl("questionnaire_required")}</div></div>
                    <span style={{color:"#E3C191"}}>→</span>
                  </div>
                </div>
              )}
            </>
          )}
          <div style={{height:20}}/>
        </>}
        {tab==="services"&&<>
          <div className="hero"><div className="hero-ring"/><div className="hero-ring2"/><div className="hero-tag">{tl("nos_services")}</div><div className="hero-name">{tl("enrichissez")}</div><div className="hero-badge"><div className="hero-dot"/><span>{tl("pour_votre_confort")}</span></div></div>
          {bookings.length>0&&<div style={{padding:"20px 22px 0"}}><div style={{fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:12,fontWeight:500}}>Vos demandes</div>{bookings.map((b,i)=>(<div key={i} style={{display:"flex",alignItems:"center",gap:10,background:"#fff",padding:"12px 16px",borderRadius:12,marginBottom:8,border:"1px solid rgba(46,60,77,0.05)"}}><div style={{width:8,height:8,borderRadius:"50%",background:b.status==="pending"?"#E3C191":b.status==="accepted"?"#4CAF50":"#E57373"}}/> <div style={{flex:1}}><div style={{fontSize:12,color:"#2E3C4D",fontWeight:500,marginBottom:2}}>{b.service}</div><div style={{fontSize:10,color:"#9A8F7E"}}>{b.status==="pending"?tl("en_attente"):b.status==="accepted"?tl("confirme"):tl("non_dispo")}</div></div></div>))}</div>}
          {[[SERVICES.slice(0,3),"Arrivée & Essentiels"],[SERVICES.slice(3,6),"Bien-être & Confort"],[SERVICES.slice(6,9),"Mobilité & Enfants"]].map(([grp,tit],idx)=>(
            <div key={idx}>
              <div style={{fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",margin:"10px 22px",fontWeight:500}}>{tit}</div>
              <div className="service-list">
                {grp.map(s=>(
                  <div className="service-card" key={s.id} onClick={()=>setSheet(s)}>
                    <img src={s.img} className="service-img" alt=""/>
                    <div className="service-body">
                      <div className="service-title">{s.title}</div>
                      <div className="service-desc">{s.desc}</div>
                      <div className="service-ftr">
                        <div className="service-tag">{sent[s.title]?tl("demande_envoyee_srv"):tl("voir_reserver")}</div>
                        <div className="service-price">{s.startingPrice}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{height:16}}/>
        </>}
        {tab==="messages"&&<>
          <div className="sec" style={{marginTop:6}}><div className="sec-title">Messagerie</div><div className="sec-line"><div className="ocre-bar"/></div></div>
          <div className="card" onClick={()=>setChat(true)}>
            <div className="msg-item"><div className="msg-av" style={{padding:4,background:"#2E3C4D",overflow:"hidden"}}><img src={ILI} style={{width:"100%",height:"100%",objectFit:"contain",filter:"brightness(0) invert(1)"}}/></div><div style={{flex:1,minWidth:0}}><div className="msg-name">Concierge Inhérence</div><div className="msg-prev">Votre équipe disponible 7j/7</div></div></div>
          </div>
          <div style={{height:12}}/>
        </>}
        {tab==="activites"&&<ActivitesPage onNotif={onNotif} lang={lang}/>}
        {tab==="profile"&&<ProfileTab onLogout={onLogout} sejourTermine={sejourTermine} lang={lang}/>}
      </div>
      {showQ&&<Questionnaire lang={lang} onClose={()=>setShowQ(false)} onComplete={(d)=>{onNotif("__fiche__",d);setQDone(true);setShowQ(false);}}/>}
      {sheet&&<ServiceSheet service={sheet} onClose={()=>setSheet(null)} onSubmit={onNotif}/>}
      {chat&&<Chat onClose={()=>setChat(false)} lang={lang}/>}
      <div className="tab-bar">
        <div className={`tab-item ${tab==="home"?"active":""}`} onClick={()=>setTab("home")}><span className="tab-icon">✧</span><span className="tab-label">{tl("tab_sejour")}</span></div>
        <div className={`tab-item ${tab==="services"?"active":""}`} onClick={()=>setTab("services")}><span className="tab-icon">🛎</span><span className="tab-label">{tl("tab_services")}</span></div>
        <div className={`tab-item ${tab==="activites"?"active":""}`} onClick={()=>setTab("activites")}><span className="tab-icon">🌴</span><span className="tab-label">{tl("tab_activites")}</span></div>
        <div className={`tab-item ${tab==="messages"?"active":""}`} onClick={()=>setTab("messages")}><span className="tab-icon">💬</span><span className="tab-label">{tl("tab_messages")}</span></div>
        <div className={`tab-item ${tab==="profile"?"active":""}`} onClick={()=>setTab("profile")}><span className="tab-icon">👤</span><span className="tab-label">{tl("tab_profile")}</span></div>
      </div>
    </>
  );
}

function ConciergeApp({bookings, confirmNotif, declineNotif, onLogout}) {
  const [tab, setTab] = useState("dash");
  const [view, setView] = useState("list");
  const [selected, setSelected] = useState(null);
  const [chat, setChat] = useState(false);
  const [declinePromptId, setDeclinePromptId] = useState(null);
  const [sejours, setSejours] = useState([
    { id:1, client:"Anne-Claire Dupont", initials:"AC", email:"anneclaire@email.com", tel:"+596 696 12 34 56", villa:"Bwa Kanpech", checkIn:"14 mars", checkOut:"21 mars", checkOutRaw:"2026-03-21", nights:7, type:"resident" },
    { id:2, client:"Thomas Bernard", initials:"TB", email:"thomas.b@email.com", tel:"+33 6 12 34 56 78", villa:null, checkIn:"14 mars", checkOut:"21 mars", checkOutRaw:"2026-03-21", nights:7, type:"voyageur" },
    { id:3, client:"Sophie Martin", initials:"SM", email:"sophie.m@email.com", tel:"+596 696 98 76 54", villa:"Caryota", checkIn:"22 mars", checkOut:"29 mars", checkOutRaw:"2026-03-29", nights:7, type:"resident" }
  ]);
  const [form, setForm] = useState({prenom:"",nom:"",email:"",tel:"",villa:"",checkIn:"",checkOut:"",type:"resident"});

  const notifs = bookings.slice().reverse();
  const pendingCount = notifs.filter(n=>n.status==="pending").length;
  
  const getDaysLeft = (checkOut) => {
    if(!checkOut) return null;
    const diff = new Date(checkOut)-new Date();
    return Math.max(0, Math.round(diff/(1000*60*60*24)));
  };
  const d = sejours.map(s=>({...s, daysLeft:getDaysLeft(s.checkOutRaw)}));
  const today = d.filter(s=>s.daysLeft===0);
  const soon = d.filter(s=>s.daysLeft!==null&&s.daysLeft>0&&s.daysLeft<=2);
  const pendingCheckout = today.length + soon.length;
  const clientFiche = notifs.find(n=>n.isFiche);
  const clientPrefs = null;

  const getInitials = (p,n) => ((p?p[0]:"")+(n?n[0]:"")).toUpperCase();
  const getNights = (d1,d2) => {
    if(!d1||!d2) return 0;
    const diff = new Date(d2)-new Date(d1);
    return Math.round(diff/(1000*60*60*24));
  };
  const formatDate = (d) => {
    if(!d) return "";
    const date = new Date(d);
    return date.toLocaleDateString('fr-FR',{weekday:'short',day:'numeric',month:'short'});
  };
  const canSave = form.prenom.trim() && form.nom.trim() && form.checkIn && form.checkOut;
  const handleSave = () => {
    const villaName = form.villa && form.villa!=="Aucune (Voyageur)" ? form.villa : null;
    const newClient = {
      id: Date.now(),
      client: form.prenom.trim()+" "+form.nom.trim(),
      initials: getInitials(form.prenom.trim(), form.nom.trim()),
      email: form.email,
      tel: form.tel,
      villa: villaName,
      checkIn: formatDate(form.checkIn),
      checkOut: formatDate(form.checkOut),
      checkInRaw: form.checkIn,
      checkOutRaw: form.checkOut,
      nights: getNights(form.checkIn, form.checkOut),
      daysLeft: getDaysLeft(form.checkOut),
      type: villaName ? "resident" : "voyageur",
    };
    setSejours(s=>[...s, newClient]);
    setForm({prenom:"",nom:"",email:"",tel:"",villa:"",checkIn:"",checkOut:"",type:"resident"});
    setView("list");
  };

  if(view==="detail" && selected){
    const daysLeft = getDaysLeft(selected.checkOutRaw);
    return <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,padding:"14px 18px",borderBottom:"1px solid rgba(46,60,77,0.07)"}}>
        <button onClick={()=>{setView("list");setSelected(null);}} style={{background:"none",border:"none",fontSize:20,color:"#2E3C4D",cursor:"pointer"}}>←</button>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:300,color:"#2E3C4D",fontStyle:"italic"}}>Fiche client</div>
      </div>
      <div style={{flex:1,overflowY:"auto",scrollbarWidth:"none",padding:"0 0 20px"}}>
        <div style={{background:"#2E3C4D",padding:"24px 22px 20px",display:"flex",alignItems:"center",gap:16}}>
          <div style={{width:54,height:54,borderRadius:"50%",background:"#E3C191",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Cormorant Garamond',serif",fontSize:20,color:"#2E3C4D",fontWeight:300,flexShrink:0}}>{selected.initials}</div>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:200,color:"#FAF8F3",fontStyle:"italic"}}>{selected.client}</div>
            {selected.villa ? <div style={{fontSize:10,color:"#E3C191",marginTop:4,letterSpacing:".1em",fontWeight:300}}>{selected.villa}</div> : <div style={{fontSize:10,color:"rgba(250,248,243,0.4)",marginTop:4,letterSpacing:".1em",textTransform:"uppercase",fontWeight:300}}>Voyageur</div>}
          </div>
        </div>

        {/* DOCUMENTS SECTION POUR CONCIERGE */}
        <div style={{margin:"14px 18px 0"}}>
          <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:10,fontWeight:400}}>📁 Documents (Devis, Factures)</div>
          <div style={{background:"#fff",borderRadius:14,padding:"14px 16px"}}>
            <input type="file" id="file-upload" style={{fontSize:10, marginBottom: 12, width: "100%"}} />
            <button onClick={() => alert("Le document a bien été uploadé et est visible par le client ! (Simulation)")} style={{width:"100%",padding:"10px",borderRadius:8,border:"none",background:"#2E3C4D",color:"#E3C191",fontSize:11,fontWeight:500,cursor:"pointer"}}>
              Uploader pour {selected.client.split(' ')[0]}
            </button>
          </div>
        </div>

        <div style={{margin:"16px 18px 0"}}>
          <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:10,fontWeight:400}}>Séjour</div>
          <div style={{background:"#fff",borderRadius:14,padding:"14px 16px"}}>
            {[
              ["🏡","Villa",selected.villa||"Voyageur (sans villa)"],
              ["📅","Arrivée",selected.checkIn||"—"],
              ["📅","Départ",selected.checkOut||"—"],
              ["🌙","Durée",selected.nights+" nuits"],
            ].map(([ico,lbl,val],i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"8px 0",borderBottom:i<3?"1px solid rgba(46,60,77,0.05)":"none"}}>
                <span style={{fontSize:14,flexShrink:0}}>{ico}</span>
                <span style={{fontSize:10,color:"#9A8F7E",minWidth:55,letterSpacing:".06em",fontWeight:300}}>{lbl}</span>
                <span style={{fontSize:12,color:"#2E3C4D",fontWeight:400}}>{val}</span>
              </div>
            ))}
          </div>
        </div>
        {(selected.email||selected.tel)&&<div style={{margin:"14px 18px 0"}}>
          <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:10,fontWeight:400}}>Contact</div>
          <div style={{background:"#fff",borderRadius:14,padding:"14px 16px"}}>
            {selected.email&&<div style={{display:"flex",alignItems:"center",gap:12,padding:"8px 0",borderBottom:selected.tel?"1px solid rgba(46,60,77,0.05)":"none"}}><span style={{fontSize:14}}>✉</span><span style={{fontSize:11,color:"#2E3C4D",fontWeight:300}}>{selected.email}</span></div>}
            {selected.tel&&<div style={{display:"flex",alignItems:"center",gap:12,padding:"8px 0"}}><span style={{fontSize:14}}>📞</span><span style={{fontSize:11,color:"#2E3C4D",fontWeight:300}}>{selected.tel}</span></div>}
          </div>
        </div>}
        <div style={{margin:"14px 18px 0"}}>
          <div style={{padding:"12px 16px",borderRadius:12,background:daysLeft===0?"#FFEBEE":daysLeft!==null&&daysLeft<=2?"#FFF8E1":"#E8F5E9",display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:daysLeft===0?"#E57373":daysLeft!==null&&daysLeft<=2?"#E3C191":"#4CAF50",flexShrink:0}}/>
            <span style={{fontSize:10,color:daysLeft===0?"#C62828":daysLeft!==null&&daysLeft<=2?"#C9A96E":"#2E7D32",letterSpacing:".08em",fontWeight:400}}>{daysLeft===0?"Départ aujourd'hui":daysLeft!==null&&daysLeft<=2?"Départ dans "+daysLeft+" jour(s)":"Séjour en cours"}</span>
          </div>
        </div>
        {clientFiche&&selected?.client?.startsWith("Anne")&&<div style={{margin:"14px 18px 0"}}>
          <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#1565C0",marginBottom:10,fontWeight:500}}>📋 Fiche pré-séjour</div>
          <div style={{background:"#E3F2FD",borderRadius:14,padding:"14px 16px",border:"1px solid rgba(33,150,243,0.15)"}}>
            {[
              ["👥","Groupe",`${clientFiche.recap?.adults||2} adulte(s)`],
              clientFiche.recap?.noAllergie?["✅","Allergies","Aucune allergie"]:clientFiche.recap?.allergies?["🚫","Allergies",clientFiche.recap.allergies]:null,
            ].filter(Boolean).map(([ico,lbl,val],i,arr)=>(
              <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"7px 0",borderBottom:i<arr.length-1?"1px solid rgba(33,150,243,0.1)":"none"}}>
                <span style={{fontSize:13,flexShrink:0,marginTop:1}}>{ico}</span>
                <div><div style={{fontSize:9,color:"#1565C0",letterSpacing:".12em",textTransform:"uppercase",marginBottom:1,fontWeight:300}}>{lbl}</div><div style={{fontSize:11,color:"#2E3C4D",fontWeight:400}}>{val}</div></div>
              </div>
            ))}
          </div>
        </div>}
      </div>
    </div>;
  }

  if(view==="new") return <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
    <div style={{display:"flex",alignItems:"center",gap:12,padding:"14px 18px",borderBottom:"1px solid rgba(46,60,77,0.07)",background:"#fff"}}>
      <button onClick={()=>setView("list")} style={{background:"none",border:"none",fontSize:20,color:"#2E3C4D",cursor:"pointer"}}>←</button>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:300,color:"#2E3C4D",fontStyle:"italic"}}>Nouveau client</div>
    </div>
    <div style={{flex:1,overflowY:"auto",padding:"20px 22px"}}>
      <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:10,fontWeight:400}}>Identité</div>
      <div style={{display:"flex",gap:12}}>
        <div style={{flex:1}}><div className="field-label">Prénom *</div><input className="field-input" value={form.prenom} onChange={e=>setForm(f=>({...f,prenom:e.target.value}))}/></div>
        <div style={{flex:1}}><div className="field-label">Nom *</div><input className="field-input" value={form.nom} onChange={e=>setForm(f=>({...f,nom:e.target.value}))}/></div>
      </div>
      <div className="field-label">Email</div><input className="field-input" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/>
      <div className="field-label">Téléphone</div><input className="field-input" value={form.tel} onChange={e=>setForm(f=>({...f,tel:e.target.value}))}/>
      <div style={{height:10}}/>
      <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#9A8F7E",marginBottom:10,fontWeight:400}}>Séjour</div>
      <div className="field-label">Villa assignée</div>
      <select className="field-input" value={form.villa} onChange={e=>setForm(f=>({...f,villa:e.target.value}))} style={{appearance:"none",background:"#fff url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%232E3C4D\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>') no-repeat right 14px center"}}>
        <option value="">Sélectionner...</option>
        <option value="Aucune (Voyageur)">Aucune (Client Voyageur)</option>
        <option value="Bwa Kanpech">Bwa Kanpech</option>
        <option value="Caryota">Caryota</option>
      </select>
      <div style={{display:"flex",gap:12}}>
        <div style={{flex:1}}><div className="field-label">Arrivée *</div><input type="date" className="field-input" value={form.checkIn} onChange={e=>setForm(f=>({...f,checkIn:e.target.value}))}/></div>
        <div style={{flex:1}}><div className="field-label">Départ *</div><input type="date" className="field-input" value={form.checkOut} onChange={e=>setForm(f=>({...f,checkOut:e.target.value}))}/></div>
      </div>
    </div>
    <div style={{padding:"16px 22px 24px",background:"#fff",borderTop:"1px solid rgba(46,60,77,0.05)"}}>
      <button className="btn-primary" disabled={!canSave} onClick={handleSave} style={{opacity:canSave?1:.5,cursor:canSave?"pointer":"not-allowed"}}>Créer le profil client</button>
    </div>
  </div>;

  return (
    <>
      <div style={{flex:1,overflowY:"auto",scrollbarWidth:"none"}}>
        {tab==="dash"&&<>
          <div className="hero"><div className="hero-ring"/><div className="hero-ring2"/><div className="hero-tag">La Conciergerie</div><div className="hero-name">Inhérence</div><div className="hero-badge"><div className="hero-dot"/><span>{pendingCount} demande(s) · {pendingCheckout} départ(s)</span></div></div>
          <div className="stats">
            <div className="stat"><div className="stat-val">{sejours.length}</div><div className="stat-lbl">Clients</div></div>
            <div className="stat"><div className="stat-val">{notifs.length}</div><div className="stat-lbl">Demandes</div></div>
            <div className="stat"><div className="stat-val">{pendingCount}</div><div className="stat-lbl">En attente</div></div>
            <div className="stat"><div className="stat-val">9.9</div><div className="stat-lbl">Note</div></div>
          </div>
          {(today.length>0||soon.length>0)&&<>
            <div className="sec"><div className="sec-title">Alertes séjours</div><div className="sec-line"><div className="ocre-bar"/></div></div>
            {today.map((s,i)=>(
              <div key={i} style={{margin:"0 18px 8px",background:"#FFEBEE",borderRadius:14,padding:"14px 16px",border:"1px solid rgba(229,115,115,0.25)"}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}><div style={{width:8,height:8,borderRadius:"50%",background:"#E57373",animation:"pulse 1.5s infinite",flexShrink:0}}/><span style={{fontSize:9,color:"#C62828",letterSpacing:".16em",textTransform:"uppercase",fontWeight:500}}>Aujourd'hui</span></div>
                <div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:34,height:34,borderRadius:10,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"#C62828",flexShrink:0}}>{s.initials}</div><div style={{flex:1}}><div style={{fontSize:12,color:"#2E3C4D",fontWeight:400}}>{s.client}</div><div style={{fontSize:10,color:"#9A8F7E",marginTop:2,fontWeight:300}}>Départ · {s.checkOut}{s.villa?" · "+s.villa:""}</div></div></div>
              </div>
            ))}
            {soon.map((s,i)=>(
              <div key={i} style={{margin:"0 18px 8px",background:"#FFF8E1",borderRadius:14,padding:"14px 16px",border:"1px solid rgba(227,193,145,0.3)"}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}><div style={{width:8,height:8,borderRadius:"50%",background:"#E3C191",flexShrink:0}}/><span style={{fontSize:9,color:"#C9A96E",letterSpacing:".16em",textTransform:"uppercase",fontWeight:500}}>Dans {s.daysLeft} jour(s)</span></div>
                <div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:34,height:34,borderRadius:10,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"#C9A96E",flexShrink:0}}>{s.initials}</div><div style={{flex:1}}><div style={{fontSize:12,color:"#2E3C4D",fontWeight:400}}>{s.client}</div><div style={{fontSize:10,color:"#9A8F7E",marginTop:2,fontWeight:300}}>{s.daysLeft===1?"Départ demain":"Départ "} · {s.checkOut}{s.villa?" · "+s.villa:""}</div></div></div>
              </div>
            ))}
          </>}
          <div className="sec"><div className="sec-title">Demandes de prestation</div><div className="sec-line"><div className="ocre-bar"/><span className="sec-sub">À traiter</span></div></div>
          {notifs.filter(n=>n.status==="pending").length===0&&<div className="card" style={{textAlign:"center",color:"#9A8F7E",fontSize:12,cursor:"default"}}>✦ Aucune demande en attente</div>}
          {notifs.map((n,i)=>(
            <div className="notif-card" key={i}>
              {n.isFiche?(
                <div style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px 8px"}}><span style={{fontSize:16}}>📋</span><div style={{flex:1}}><div style={{fontSize:12,color:"#2E3C4D",fontWeight:400}}>Questionnaire reçu — {n.client}</div><div style={{fontSize:10,color:"#1565C0",marginTop:2,fontWeight:300}}>Fiche pré-séjour complétée · Visible dans Clients</div></div><div style={{fontSize:9,color:"rgba(227,193,145,0.6)"}}>{n.time}</div></div>
              ):(
                <>
                  <div className="notif-hdr"><span style={{fontSize:14}}>🔔</span><div className="notif-hdr-title">{n.client}</div><div style={{marginLeft:"auto",fontSize:9,color:"rgba(227,193,145,0.6)"}}>{n.time}</div></div>
                  <div className="notif-body">
                    <div className="notif-service">{n.service}</div>
                    {n.recap?.length>0&&<div className="notif-detail">{n.recap.map((r,j)=>(<div className="notif-detail-row" key={j}><span className="notif-detail-label">{r.l}</span><span className="notif-detail-val">{r.v}</span></div>))}</div>}
                    {n.status==="pending"&&(
                      declinePromptId === n.id ? (
                        <div style={{marginTop:12, padding:10, background:"#F5ECD8", borderRadius:8, display:"flex", flexDirection:"column", gap:8}}>
                          <div style={{fontSize:10, color:"#2E3C4D", fontWeight:500}}>Proposer une alternative :</div>
                          <input type="datetime-local" className="field-input" style={{background:"#fff", marginBottom:0}} />
                          <textarea className="field-textarea" placeholder="Ex: Désolé, le créneau n'est pas disponible. Seriez-vous dispo à..." rows={2} style={{background:"#fff", marginBottom:0}}/>
                          <div style={{display:"flex", gap:8, marginTop:4}}>
                            <button className="notif-btn notif-accept" onClick={() => {
                              alert("Proposition alternative envoyée au client !");
                              setDeclinePromptId(null);
                              declineNotif(n.id);
                            }}>Envoyer</button>
                            <button className="notif-btn notif-decline" onClick={() => setDeclinePromptId(null)}>Annuler</button>
                          </div>
                        </div>
                      ) : (
                        <div className="notif-actions">
                          <button className="notif-btn notif-accept" onClick={()=>confirmNotif(n.id)}>✓ Confirmer</button>
                          <button className="notif-btn notif-decline" onClick={()=>setDeclinePromptId(n.id)}>Décliner / Proposer</button>
                        </div>
                      )
                    )}
                    {n.status==="accepted"&&<div style={{marginTop:10,display:"flex",alignItems:"center",gap:6}}><div style={{width:6,height:6,borderRadius:"50%",background:"#4CAF50"}}/><span style={{fontSize:10,color:"#2E7D32",letterSpacing:".06em"}}>Confirmé · Visible par le client</span></div>}
                    {n.status==="declined"&&<div style={{marginTop:10,fontSize:10,color:"#9A8F7E",letterSpacing:".06em"}}>Demande déclinée / Alternative proposée</div>}
                  </div>
                </>
              )}
            </div>
          ))}
        </>}
        {tab==="clients"&&<>
          <div className="sec" style={{marginTop:24,display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}><div className="sec-title">Clients & Séjours</div><button onClick={()=>setView("new")} style={{background:"#2E3C4D",color:"#E3C191",border:"none",borderRadius:20,padding:"6px 12px",fontSize:10,fontWeight:500,letterSpacing:".05em",cursor:"pointer"}}>+ Nouveau</button></div>
          <div style={{padding:"0 18px 20px"}}>
            {sejours.map((s,i)=>(
              <div key={i} onClick={()=>{setSelected(s);setView("detail");}} style={{background:"#fff",borderRadius:14,padding:"14px",marginBottom:10,display:"flex",alignItems:"center",gap:14,boxShadow:"0 4px 15px rgba(0,0,0,0.02)",cursor:"pointer"}}>
                <div style={{width:42,height:42,borderRadius:"50%",background:"rgba(46,60,77,0.05)",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"#2E3C4D"}}>{s.initials}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,color:"#2E3C4D",fontWeight:500,marginBottom:2}}>{s.client}</div>
                  <div style={{fontSize:10,color:"#9A8F7E",fontWeight:300}}>{s.checkIn} - {s.checkOut}{s.villa?" · "+s.villa:" · Voyageur"}</div>
                </div>
                <span style={{color:"#9A8F7E"}}>→</span>
              </div>
            ))}
          </div>
        </>}
        {tab==="settings"&&<>
          <div className="sec" style={{marginTop:24}}><div className="sec-title">Paramètres Conciergerie</div><div className="sec-line"><div className="ocre-bar"/></div></div>
          <div className="card" onClick={onLogout} style={{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}><span style={{fontSize:16}}>🚪</span><span style={{fontSize:12,color:"#2E3C4D",fontWeight:500}}>Se déconnecter</span></div>
            <span style={{color:"#9A8F7E"}}>→</span>
          </div>
        </>}
      </div>
      {/* Affichage du chat en mode Concierge */}
      {chat && <Chat onClose={() => setChat(false)} conciergeMode={true} lang="fr"/>}

      <div className="tab-bar">
        <div className={`tab-item ${tab==="dash"?"active":""}`} onClick={()=>setTab("dash")}><span className="tab-icon">✧</span><span className="tab-label">DASHBOARD</span></div>
        <div className={`tab-item ${tab==="clients"?"active":""}`} onClick={()=>setTab("clients")}><span className="tab-icon">👥</span><span className="tab-label">CLIENTS</span></div>
        <div className={`tab-item ${tab==="settings"?"active":""}`} onClick={()=>setTab("settings")}><span className="tab-icon">⚙️</span><span className="tab-label">RÉGLAGES</span></div>
      </div>
    </>
  );
}

function Login({onLogin, lang="fr"}) {
  const tl = useT(lang);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [view, setView] = useState("login");

  if(view==="forgot") return (
    <div style={{flex:1,display:"flex",flexDirection:"column",padding:"40px 24px",background:"#FAF8F3",animation:"fi .3s ease"}}>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,color:"#2E3C4D",marginBottom:10,fontWeight:300,fontStyle:"italic"}}>{tl("mdp_oublie_title")}</div>
      <div style={{fontSize:11,color:"#9A8F7E",lineHeight:1.5,marginBottom:30,fontWeight:300}}>{tl("mdp_oublie_sub")}</div>
      <div className="field-label">{tl("email_lbl")}</div>
      <input type="email" className="field-input" value={email} onChange={e=>setEmail(e.target.value)}/>
      <button className="btn-primary" style={{marginTop:10}} onClick={()=>{alert(tl("email_envoye"));setView("login");}}>{tl("envoyer_lien")}</button>
      <div style={{textAlign:"center",marginTop:24}}><span onClick={()=>setView("login")} style={{fontSize:11,color:"#9A8F7E",textDecoration:"underline",cursor:"pointer",fontWeight:300}}>{tl("retour_connexion")}</span></div>
    </div>
  );

  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",background:"#2E3C4D",position:"relative",overflow:"hidden"}}>
      <div className="hero-ring" style={{top:"-50px",right:"-50px",width:250,height:250}}/>
      <div className="hero-ring2" style={{top:"-100px",right:"-100px",width:350,height:350}}/>
      <div style={{padding:"60px 30px 40px",position:"relative",zIndex:2}}>
        <div style={{width:50,height:50,background:"#E3C191",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:20}}>
          <img src={ILN} style={{width:24,height:24}} alt=""/>
        </div>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:32,color:"#FAF8F3",marginBottom:8,fontWeight:300,fontStyle:"italic"}}>{tl("espace_membres")}</div>
        <div style={{fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"#E3C191",fontWeight:300}}>{tl("concierge_prestige")}</div>
      </div>
      <div style={{flex:1,background:"#FAF8F3",borderRadius:"30px 30px 0 0",padding:"40px 24px",position:"relative",zIndex:2}}>
        <div className="field-label">{tl("email_lbl")}</div>
        <input type="email" className="field-input" value={email} onChange={e=>setEmail(e.target.value)}/>
        <div className="field-label">{tl("mdp_lbl")}</div>
        <input type="password" className="field-input" value={pwd} onChange={e=>setPwd(e.target.value)} onKeyDown={e=>e.key==="Enter"&&onLogin(email.includes("concierge")?"concierge":email.includes("thomas")?"voyageur":"resident")}/>
        <div style={{textAlign:"right",marginBottom:24,marginTop:-4}}><span onClick={()=>setView("forgot")} style={{fontSize:10,color:"#9A8F7E",textDecoration:"underline",cursor:"pointer",fontWeight:300}}>{tl("mdp_oublie")}</span></div>
        <button className="btn-primary" onClick={()=>onLogin(email.includes("concierge")?"concierge":email.includes("thomas")?"voyageur":"resident")}>{tl("se_connecter")}</button>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginTop:24}}><span style={{fontSize:12}}>🔒</span><span style={{fontSize:9,color:"#9A8F7E",letterSpacing:".05em",textTransform:"uppercase"}}>{tl("connexion_securisee")}</span></div>
      </div>
    </div>
  );
}

export default function App() {
  const [session, setSession] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [toast, setToast] = useState(null);
  const [clientFiche, setClientFiche] = useState(null);

  const handleNotif = (name, recap) => {
    if(name==="Activité sur-mesure"){
      setToast(name);
      setBookings(b=>[...b,{id:Date.now(),client:"Anne-Claire",service:name,recap,time:new Date().toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),status:"pending"}]);
      setTimeout(()=>setToast(null),4000);
      return;
    }
    if(name==="__fiche__"){
      setClientFiche(recap);
      setBookings(b=>[...b,{id:Date.now(),client:"Anne-Claire",service:"__fiche_complete__",recap:recap,time:new Date().toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),status:"info",isFiche:true}]);
      return;
    }
    setToast(name);
    setBookings(b=>[...b,{id:Date.now(),client:"Anne-Claire",service:name,recap,time:new Date().toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),status:"pending"}]);
    setTimeout(()=>setToast(null),4000);
  };
  
  const handleConfirm = (id) => setBookings(b=>b.map(x=>x.id===id?{...x,status:"accepted"}:x));
  const handleDecline = (id) => setBookings(b=>b.map(x=>x.id===id?{...x,status:"declined"}:x));

  return <>
    <style>{GS}</style>
    <div className="phone">
      {!session&&<Login onLogin={r=>setSession(r)}/>}
      {session==="resident"&&<ResidentApp onNotif={handleNotif} bookings={bookings} onLogout={()=>setSession(null)}/>}
      {session==="voyageur"&&<VoyageurApp onNotif={handleNotif} bookings={bookings} onLogout={()=>setSession(null)}/>}
      {session==="concierge"&&<ConciergeApp bookings={bookings} confirmNotif={handleConfirm} declineNotif={handleDecline} onLogout={()=>setSession(null)}/>}
      {toast&&<div className="toast">✓ Demande envoyée</div>}
    </div>
  </>;
}
