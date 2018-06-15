/**
 * Types
 */
export const Types = () => {
  const fileTypes = [
    {
      desc: 'Andrew Toolkit',
      mime: ['application/andrew-inset'],
      ext: ['N/A']
    },
    { desc: 'Applixware', mime: ['application/applixware'], ext: ['aw'] },
    {
      desc: 'Atom Syndication Format',
      mime: ['application/atom+xml'],
      ext: ['atom']
    },
    {
      desc: 'Atom Publishing Protocol',
      mime: ['application/atomcat+xml'],
      ext: ['atomcat']
    },
    {
      desc: 'Atom Publishing Protocol Service Document',
      mime: ['application/atomsvc+xml'],
      ext: ['atomsvc']
    },
    {
      desc: 'Voice Browser Call Control',
      mime: ['application/ccxml+xml,'],
      ext: ['ccxml']
    },
    {
      desc: 'Cloud Data Management Interface (CDMI) - Capability',
      mime: ['application/cdmi-capability'],
      ext: ['cdmia']
    },
    {
      desc: 'Cloud Data Management Interface (CDMI) - Contaimer',
      mime: ['application/cdmi-container'],
      ext: ['cdmic']
    },
    {
      desc: 'Cloud Data Management Interface (CDMI) - Domain',
      mime: ['application/cdmi-domain'],
      ext: ['cdmid']
    },
    {
      desc: 'Cloud Data Management Interface (CDMI) - Object',
      mime: ['application/cdmi-object'],
      ext: ['cdmio']
    },
    {
      desc: 'Cloud Data Management Interface (CDMI) - Queue',
      mime: ['application/cdmi-queue'],
      ext: ['cdmiq']
    },
    { desc: 'CU-SeeMe', mime: ['application/cu-seeme'], ext: ['cu'] },
    {
      desc: 'Web Distributed Authoring and Versioning',
      mime: ['application/davmount+xml'],
      ext: ['davmount']
    },
    {
      desc:
        'Data Structure for the Security Suitability of Cryptographic Algorithms',
      mime: ['application/dssc+der'],
      ext: ['dssc']
    },
    {
      desc:
        'Data Structure for the Security Suitability of Cryptographic Algorithms',
      mime: ['application/dssc+xml'],
      ext: ['xdssc']
    },
    { desc: 'ECMAScript', mime: ['application/ecmascript'], ext: ['es'] },
    {
      desc: 'Extensible MultiModal Annotation',
      mime: ['application/emma+xml'],
      ext: ['emma']
    },
    {
      desc: 'Electronic Publication',
      mime: ['application/epub+zip'],
      ext: ['epub']
    },
    {
      desc: 'Efficient XML Interchange',
      mime: ['application/exi'],
      ext: ['exi']
    },
    {
      desc: 'Portable Font Resource',
      mime: ['application/font-tdpfr'],
      ext: ['pfr']
    },
    { desc: 'Hyperstudio', mime: ['application/hyperstudio'], ext: ['stk'] },
    {
      desc: 'Internet Protocol Flow Information Export',
      mime: ['application/ipfix'],
      ext: ['ipfix']
    },
    { desc: 'Java Archive', mime: ['application/java-archive'], ext: ['jar'] },
    {
      desc: 'Java Serialized Object',
      mime: ['application/java-serialized-object'],
      ext: ['ser']
    },
    {
      desc: 'Java Bytecode File',
      mime: ['application/java-vm'],
      ext: ['class']
    },
    { desc: 'JavaScript', mime: ['application/javascript'], ext: ['js'] },
    {
      desc: 'JavaScript Object Notation (JSON)',
      mime: ['application/json'],
      ext: ['json']
    },
    {
      desc: 'Macintosh BinHex 4.0',
      mime: ['application/mac-binhex40'],
      ext: ['hqx']
    },
    { desc: 'Compact Pro', mime: ['application/mac-compactpro'], ext: ['cpt'] },
    {
      desc: 'Metadata Authority  Description Schema',
      mime: ['application/mads+xml'],
      ext: ['mads']
    },
    { desc: 'MARC Formats', mime: ['application/marc'], ext: ['mrc'] },
    {
      desc: 'MARC21 XML Schema',
      mime: ['application/marcxml+xml'],
      ext: ['mrcx']
    },
    {
      desc: 'Mathematica Notebooks',
      mime: ['application/mathematica'],
      ext: ['ma']
    },
    {
      desc: 'Mathematical Markup Language',
      mime: ['application/mathml+xml'],
      ext: ['mathml']
    },
    { desc: 'Mbox database files', mime: ['application/mbox'], ext: ['mbox'] },
    {
      desc: 'Media Server Control Markup Language',
      mime: ['application/mediaservercontrol+xml'],
      ext: ['mscml']
    },
    { desc: 'Metalink', mime: ['application/metalink4+xml'], ext: ['meta4'] },
    {
      desc: 'Metadata Encoding and Transmission Standard',
      mime: ['application/mets+xml'],
      ext: ['mets']
    },
    {
      desc: 'Metadata Object Description Schema',
      mime: ['application/mods+xml'],
      ext: ['mods']
    },
    { desc: 'MPEG-21', mime: ['application/mp21'], ext: ['m21'] },
    { desc: 'MPEG-3', mime: ['audio/mp3'], ext: ['mp3'] },
    { desc: 'Microsoft Word', mime: ['application/msword'], ext: ['doc'] },
    {
      desc: 'Material Exchange Format',
      mime: ['application/mxf'],
      ext: ['mxf']
    },
    { desc: 'Binary Data', mime: ['application/octet-stream'], ext: ['bin'] },
    {
      desc: 'Office Document Architecture',
      mime: ['application/oda'],
      ext: ['oda']
    },
    {
      desc: 'Open eBook Publication Structure',
      mime: ['application/oebps-package+xml'],
      ext: ['opf']
    },
    { desc: 'Ogg', mime: ['application/ogg'], ext: ['ogx'] },
    {
      desc: 'Microsoft OneNote',
      mime: ['application/onenote'],
      ext: ['onetoc']
    },
    {
      desc: 'XML Patch Framework',
      mime: ['application/patch-ops-error+xml'],
      ext: ['xer']
    },
    {
      desc: 'Adobe Portable Document Format',
      mime: ['application/pdf'],
      ext: ['pdf']
    },
    {
      desc: 'Pretty Good Privacy',
      mime: ['application/pgp-encrypted'],
      ext: ['']
    },
    {
      desc: 'Pretty Good Privacy - Signature',
      mime: ['application/pgp-signature'],
      ext: ['pgp']
    },
    { desc: 'PICSRules', mime: ['application/pics-rules'], ext: ['prf'] },
    {
      desc: 'PKCS #10 - Certification Request Standard',
      mime: ['application/pkcs10'],
      ext: ['p10']
    },
    {
      desc: 'PKCS #7 - Cryptographic Message Syntax Standard',
      mime: ['application/pkcs7-mime'],
      ext: ['p7m']
    },
    {
      desc: 'PKCS #7 - Cryptographic Message Syntax Standard',
      mime: ['application/pkcs7-signature'],
      ext: ['p7s']
    },
    {
      desc: 'PKCS #8 - Private-Key Information Syntax Standard',
      mime: ['application/pkcs8'],
      ext: ['p8']
    },
    {
      desc: 'Attribute Certificate',
      mime: ['application/pkix-attr-cert'],
      ext: ['ac']
    },
    {
      desc: 'Internet Public Key Infrastructure - Certificate',
      mime: ['application/pkix-cert'],
      ext: ['cer']
    },
    {
      desc: 'Internet Public Key Infrastructure - Certificate Revocation Lists',
      mime: ['application/pkix-crl'],
      ext: ['crl']
    },
    {
      desc: 'Internet Public Key Infrastructure - Certification Path',
      mime: ['application/pkix-pkipath'],
      ext: ['pkipath']
    },
    {
      desc:
        'Internet Public Key Infrastructure - Certificate Management Protocole',
      mime: ['application/pkixcmp'],
      ext: ['pki']
    },
    {
      desc: 'Pronunciation Lexicon Specification',
      mime: ['application/pls+xml'],
      ext: ['pls']
    },
    { desc: 'PostScript', mime: ['application/postscript'], ext: ['ai'] },
    { desc: 'CU-Writer', mime: ['application/prs.cww'], ext: ['cww'] },
    {
      desc: 'Portable Symmetric Key Container',
      mime: ['application/pskc+xml'],
      ext: ['pskcxml']
    },
    {
      desc: 'Resource Description Framework',
      mime: ['application/rdf+xml'],
      ext: ['rdf']
    },
    { desc: 'IMS Networks', mime: ['application/reginfo+xml'], ext: ['rif'] },
    {
      desc: 'Relax NG Compact Syntax',
      mime: ['application/relax-ng-compact-syntax'],
      ext: ['rnc']
    },
    {
      desc: 'XML Resource Lists',
      mime: ['application/resource-lists+xml'],
      ext: ['rl']
    },
    {
      desc: 'XML Resource Lists Diff',
      mime: ['application/resource-lists-diff+xml'],
      ext: ['rld']
    },
    {
      desc: 'XML Resource Lists',
      mime: ['application/rls-services+xml'],
      ext: ['rs']
    },
    {
      desc: 'Really Simple Discovery',
      mime: ['application/rsd+xml'],
      ext: ['rsd']
    },
    {
      desc: 'RSS - Really Simple Syndication',
      mime: ['application/rss+xml'],
      ext: ['rss']
    },
    { desc: 'Rich Text Format', mime: ['application/rtf'], ext: ['rtf'] },
    {
      desc: 'Systems Biology Markup Language',
      mime: ['application/sbml+xml'],
      ext: ['sbml']
    },
    {
      desc: 'Server-Based Certificate Validation Protocol - Validation Request',
      mime: ['application/scvp-cv-request'],
      ext: ['scq']
    },
    {
      desc:
        'Server-Based Certificate Validation Protocol - Validation Response',
      mime: ['application/scvp-cv-response'],
      ext: ['scs']
    },
    {
      desc:
        'Server-Based Certificate Validation Protocol - Validation Policies - Request',
      mime: ['application/scvp-vp-request'],
      ext: ['spq']
    },
    {
      desc:
        'Server-Based Certificate Validation Protocol - Validation Policies - Response',
      mime: ['application/scvp-vp-response'],
      ext: ['spp']
    },
    {
      desc: 'Session Description Protocol',
      mime: ['application/sdp'],
      ext: ['sdp']
    },
    {
      desc: 'Secure Electronic Transaction - Payment',
      mime: ['application/set-payment-initiation'],
      ext: ['setpay']
    },
    {
      desc: 'Secure Electronic Transaction - Registration',
      mime: ['application/set-registration-initiation'],
      ext: ['setreg']
    },
    { desc: 'S Hexdump Format', mime: ['application/shf+xml'], ext: ['shf'] },
    {
      desc: 'Synchronized Multimedia Integration Language',
      mime: ['application/smil+xml'],
      ext: ['smi']
    },
    { desc: 'SPARQL - Query', mime: ['application/sparql-query'], ext: ['rq'] },
    {
      desc: 'SPARQL - Results',
      mime: ['application/sparql-results+xml'],
      ext: ['srx']
    },
    {
      desc: 'Speech Recognition Grammar Specification',
      mime: ['application/srgs'],
      ext: ['gram']
    },
    {
      desc: 'Speech Recognition Grammar Specification - XML',
      mime: ['application/srgs+xml'],
      ext: ['grxml']
    },
    {
      desc: 'Search/Retrieve via URL Response Format',
      mime: ['application/sru+xml'],
      ext: ['sru']
    },
    {
      desc: 'Speech Synthesis Markup Language',
      mime: ['application/ssml+xml'],
      ext: ['ssml']
    },
    {
      desc: 'Text Encoding and Interchange',
      mime: ['application/tei+xml'],
      ext: ['tei']
    },
    {
      desc: 'Sharing Transaction Fraud Data',
      mime: ['application/thraud+xml'],
      ext: ['tfi']
    },
    {
      desc: 'Time Stamped Data Envelope',
      mime: ['application/timestamped-data'],
      ext: ['tsd']
    },
    {
      desc: '3rd Generation Partnership Project - Pic Large',
      mime: ['application/vnd.3gpp.pic-bw-large'],
      ext: ['plb']
    },
    {
      desc: '3rd Generation Partnership Project - Pic Small',
      mime: ['application/vnd.3gpp.pic-bw-small'],
      ext: ['psb']
    },
    {
      desc: '3rd Generation Partnership Project - Pic Var',
      mime: ['application/vnd.3gpp.pic-bw-var'],
      ext: ['pvb']
    },
    {
      desc:
        '3rd Generation Partnership Project - Transaction Capabilities Application Part',
      mime: ['application/vnd.3gpp2.tcap'],
      ext: ['tcap']
    },
    {
      desc: '3M Post It Notes',
      mime: ['application/vnd.3m.post-it-notes'],
      ext: ['pwn']
    },
    {
      desc: 'Simply Accounting',
      mime: ['application/vnd.accpac.simply.aso'],
      ext: ['aso']
    },
    {
      desc: 'Simply Accounting - Data Import',
      mime: ['application/vnd.accpac.simply.imp'],
      ext: ['imp']
    },
    { desc: 'ACU Cobol', mime: ['application/vnd.acucobol'], ext: ['acu'] },
    { desc: 'ACU Cobol', mime: ['application/vnd.acucorp'], ext: ['atc'] },
    {
      desc: 'Adobe AIR Application',
      mime: ['application/vnd.adobe.air-application-installer-package+zip'],
      ext: ['air']
    },
    {
      desc: 'Adobe Flex Project',
      mime: ['application/vnd.adobe.fxp'],
      ext: ['fxp']
    },
    {
      desc: 'Adobe XML Data Package',
      mime: ['application/vnd.adobe.xdp+xml'],
      ext: ['xdp']
    },
    {
      desc: 'Adobe XML Forms Data Format',
      mime: ['application/vnd.adobe.xfdf'],
      ext: ['xfdf']
    },
    {
      desc: 'Ahead AIR Application',
      mime: ['application/vnd.ahead.space'],
      ext: ['ahead']
    },
    {
      desc: 'AirZip FileSECURE',
      mime: ['application/vnd.airzip.filesecure.azf'],
      ext: ['azf']
    },
    {
      desc: 'AirZip FileSECURE',
      mime: ['application/vnd.airzip.filesecure.azs'],
      ext: ['azs']
    },
    {
      desc: 'Amazon Kindle eBook format',
      mime: ['application/vnd.amazon.ebook'],
      ext: ['azw']
    },
    {
      desc: 'Active Content Compression',
      mime: ['application/vnd.americandynamics.acc'],
      ext: ['acc']
    },
    { desc: 'AmigaDE', mime: ['application/vnd.amiga.ami'], ext: ['ami'] },
    {
      desc: 'Android Package Archive',
      mime: ['application/vnd.android.package-archive'],
      ext: ['apk']
    },
    {
      desc: 'ANSER-WEB Terminal Client - Certificate Issue',
      mime: ['application/vnd.anser-web-certificate-issue-initiation'],
      ext: ['cii']
    },
    {
      desc: 'ANSER-WEB Terminal Client - Web Funds Transfer',
      mime: ['application/vnd.anser-web-funds-transfer-initiation'],
      ext: ['fti']
    },
    {
      desc: 'Antix Game Player',
      mime: ['application/vnd.antix.game-component'],
      ext: ['atx']
    },
    {
      desc: 'Apple Installer Package',
      mime: ['application/vnd.apple.installer+xml'],
      ext: ['mpkg']
    },
    {
      desc: 'Multimedia Playlist Unicode',
      mime: ['application/vnd.apple.mpegurl'],
      ext: ['m3u8']
    },
    {
      desc: 'Arista Networks Software Image',
      mime: ['application/vnd.aristanetworks.swi'],
      ext: ['swi']
    },
    { desc: 'Audiograph', mime: ['application/vnd.audiograph'], ext: ['aep'] },
    {
      desc: 'Blueice Research Multipass',
      mime: ['application/vnd.blueice.multipass'],
      ext: ['mpm']
    },
    {
      desc: 'BMI Drawing Data Interchange',
      mime: ['application/vnd.bmi'],
      ext: ['bmi']
    },
    {
      desc: 'BusinessObjects',
      mime: ['application/vnd.businessobjects'],
      ext: ['rep']
    },
    {
      desc: 'CambridgeSoft Chem Draw',
      mime: ['application/vnd.chemdraw+xml'],
      ext: ['cdxml']
    },
    {
      desc: 'Karaoke on Chipnuts Chipsets',
      mime: ['application/vnd.chipnuts.karaoke-mmd'],
      ext: ['mmd']
    },
    {
      desc: 'Interactive Geometry Software Cinderella',
      mime: ['application/vnd.cinderella'],
      ext: ['cdy']
    },
    {
      desc: 'Claymore Data Files',
      mime: ['application/vnd.claymore'],
      ext: ['cla']
    },
    {
      desc: 'RetroPlatform Player',
      mime: ['application/vnd.cloanto.rp9'],
      ext: ['rp9']
    },
    {
      desc: 'Clonk Game',
      mime: ['application/vnd.clonk.c4group'],
      ext: ['c4g']
    },
    {
      desc: 'ClueTrust CartoMobile - Config',
      mime: ['application/vnd.cluetrust.cartomobile-config'],
      ext: ['c11amc']
    },
    {
      desc: 'ClueTrust CartoMobile - Config Package',
      mime: ['application/vnd.cluetrust.cartomobile-config-pkg'],
      ext: ['c11amz']
    },
    {
      desc: 'Sixth Floor Media - CommonSpace',
      mime: ['application/vnd.commonspace'],
      ext: ['csp']
    },
    {
      desc: 'CIM Database',
      mime: ['application/vnd.contact.cmsg'],
      ext: ['cdbcmsg']
    },
    {
      desc: 'CosmoCaller',
      mime: ['application/vnd.cosmocaller'],
      ext: ['cmc']
    },
    {
      desc: 'CrickSoftware - Clicker',
      mime: ['application/vnd.crick.clicker'],
      ext: ['clkx']
    },
    {
      desc: 'CrickSoftware - Clicker - Keyboard',
      mime: ['application/vnd.crick.clicker.keyboard'],
      ext: ['clkk']
    },
    {
      desc: 'CrickSoftware - Clicker - Palette',
      mime: ['application/vnd.crick.clicker.palette'],
      ext: ['clkp']
    },
    {
      desc: 'CrickSoftware - Clicker - Template',
      mime: ['application/vnd.crick.clicker.template'],
      ext: ['clkt']
    },
    {
      desc: 'CrickSoftware - Clicker - Wordbank',
      mime: ['application/vnd.crick.clicker.wordbank'],
      ext: ['clkw']
    },
    {
      desc: 'Critical Tools - PERT Chart EXPERT',
      mime: ['application/vnd.criticaltools.wbs+xml'],
      ext: ['wbs']
    },
    { desc: 'PosML', mime: ['application/vnd.ctc-posml'], ext: ['pml'] },
    {
      desc: 'Adobe PostScript Printer Description File Format',
      mime: ['application/vnd.cups-ppd'],
      ext: ['ppd']
    },
    { desc: 'CURL Applet', mime: ['application/vnd.curl.car'], ext: ['car'] },
    {
      desc: 'CURL Applet',
      mime: ['application/vnd.curl.pcurl'],
      ext: ['pcurl']
    },
    {
      desc: 'RemoteDocs R-Viewer',
      mime: ['application/vnd.data-vision.rdz'],
      ext: ['rdz']
    },
    {
      desc: 'FCS Express Layout Link',
      mime: ['application/vnd.denovo.fcselayout-link'],
      ext: ['fe_launch']
    },
    {
      desc: 'New Moon Liftoff/DNA',
      mime: ['application/vnd.dna'],
      ext: ['dna']
    },
    {
      desc: 'Dolby Meridian Lossless Packing',
      mime: ['application/vnd.dolby.mlp'],
      ext: ['mlp']
    },
    { desc: 'DPGraph', mime: ['application/vnd.dpgraph'], ext: ['dpg'] },
    {
      desc: 'DreamFactory',
      mime: ['application/vnd.dreamfactory'],
      ext: ['dfac']
    },
    {
      desc: 'Digital Video Broadcasting',
      mime: ['application/vnd.dvb.ait'],
      ext: ['ait']
    },
    {
      desc: 'Digital Video Broadcasting',
      mime: ['application/vnd.dvb.service'],
      ext: ['svc']
    },
    { desc: 'DynaGeo', mime: ['application/vnd.dynageo'], ext: ['geo'] },
    {
      desc: 'EcoWin Chart',
      mime: ['application/vnd.ecowin.chart'],
      ext: ['mag']
    },
    { desc: 'Enliven Viewer', mime: ['application/vnd.enliven'], ext: ['nml'] },
    {
      desc: 'QUASS Stream Player',
      mime: ['application/vnd.epson.esf'],
      ext: ['esf']
    },
    {
      desc: 'QUASS Stream Player',
      mime: ['application/vnd.epson.msf'],
      ext: ['msf']
    },
    {
      desc: 'QuickAnime Player',
      mime: ['application/vnd.epson.quickanime'],
      ext: ['qam']
    },
    {
      desc: 'SimpleAnimeLite Player',
      mime: ['application/vnd.epson.salt'],
      ext: ['slt']
    },
    {
      desc: 'QUASS Stream Player',
      mime: ['application/vnd.epson.ssf'],
      ext: ['ssf']
    },
    {
      desc: 'MICROSEC e-Szign¢',
      mime: ['application/vnd.eszigno3+xml'],
      ext: ['es3']
    },
    {
      desc: 'EZPix Secure Photo Album',
      mime: ['application/vnd.ezpix-album'],
      ext: ['ez2']
    },
    {
      desc: 'EZPix Secure Photo Album',
      mime: ['application/vnd.ezpix-package'],
      ext: ['ez3']
    },
    { desc: 'Forms Data Format', mime: ['application/vnd.fdf'], ext: ['fdf'] },
    {
      desc: 'Digital Siesmograph Networks - SEED Datafiles',
      mime: ['application/vnd.fdsn.seed'],
      ext: ['seed']
    },
    { desc: 'NpGraphIt', mime: ['application/vnd.flographit'], ext: ['gph'] },
    {
      desc: 'FluxTime Clip',
      mime: ['application/vnd.fluxtime.clip'],
      ext: ['ftc']
    },
    {
      desc: 'FrameMaker Normal Format',
      mime: ['application/vnd.framemaker'],
      ext: ['fm']
    },
    {
      desc: 'Frogans Player',
      mime: ['application/vnd.frogans.fnc'],
      ext: ['fnc']
    },
    {
      desc: 'Frogans Player',
      mime: ['application/vnd.frogans.ltf'],
      ext: ['ltf']
    },
    {
      desc: 'Friendly Software Corporation',
      mime: ['application/vnd.fsc.weblaunch'],
      ext: ['fsc']
    },
    {
      desc: 'Fujitsu Oasys',
      mime: ['application/vnd.fujitsu.oasys'],
      ext: ['oas']
    },
    {
      desc: 'Fujitsu Oasys',
      mime: ['application/vnd.fujitsu.oasys2'],
      ext: ['oa2']
    },
    {
      desc: 'Fujitsu Oasys',
      mime: ['application/vnd.fujitsu.oasys3'],
      ext: ['oa3']
    },
    {
      desc: 'Fujitsu Oasys',
      mime: ['application/vnd.fujitsu.oasysgp'],
      ext: ['fg5']
    },
    {
      desc: 'Fujitsu Oasys',
      mime: ['application/vnd.fujitsu.oasysprs'],
      ext: ['bh2']
    },
    {
      desc: 'Fujitsu - Xerox 2D CAD Data',
      mime: ['application/vnd.fujixerox.ddd'],
      ext: ['ddd']
    },
    {
      desc: 'Fujitsu - Xerox DocuWorks',
      mime: ['application/vnd.fujixerox.docuworks'],
      ext: ['xdw']
    },
    {
      desc: 'Fujitsu - Xerox DocuWorks Binder',
      mime: ['application/vnd.fujixerox.docuworks.binder'],
      ext: ['xbd']
    },
    { desc: 'FuzzySheet', mime: ['application/vnd.fuzzysheet'], ext: ['fzs'] },
    {
      desc: 'Genomatix Tuxedo Framework',
      mime: ['application/vnd.genomatix.tuxedo'],
      ext: ['txd']
    },
    { desc: 'GeoGebra', mime: ['application/vnd.geogebra.file'], ext: ['ggb'] },
    { desc: 'GeoGebra', mime: ['application/vnd.geogebra.tool'], ext: ['ggt'] },
    {
      desc: 'GeoMetry Explorer',
      mime: ['application/vnd.geometry-explorer'],
      ext: ['gex']
    },
    {
      desc: 'GEONExT and JSXGraph',
      mime: ['application/vnd.geonext'],
      ext: ['gxt']
    },
    { desc: 'GeoplanW', mime: ['application/vnd.geoplan'], ext: ['g2w'] },
    { desc: 'GeospacW', mime: ['application/vnd.geospace'], ext: ['g3w'] },
    { desc: 'GameMaker ActiveX', mime: ['application/vnd.gmx'], ext: ['gmx'] },
    {
      desc: 'Google Earth - KML',
      mime: ['application/vnd.google-earth.kml+xml'],
      ext: ['kml']
    },
    {
      desc: 'Google Earth - Zipped KML',
      mime: ['application/vnd.google-earth.kmz'],
      ext: ['kmz']
    },
    { desc: 'GrafEq', mime: ['application/vnd.grafeq'], ext: ['gqf'] },
    {
      desc: 'Groove - Account',
      mime: ['application/vnd.groove-account'],
      ext: ['gac']
    },
    {
      desc: 'Groove - Help',
      mime: ['application/vnd.groove-help'],
      ext: ['ghf']
    },
    {
      desc: 'Groove - Identity Message',
      mime: ['application/vnd.groove-identity-message'],
      ext: ['gim']
    },
    {
      desc: 'Groove - Injector',
      mime: ['application/vnd.groove-injector'],
      ext: ['grv']
    },
    {
      desc: 'Groove - Tool Message',
      mime: ['application/vnd.groove-tool-message'],
      ext: ['gtm']
    },
    {
      desc: 'Groove - Tool Template',
      mime: ['application/vnd.groove-tool-template'],
      ext: ['tpl']
    },
    {
      desc: 'Groove - Vcard',
      mime: ['application/vnd.groove-vcard'],
      ext: ['vcg']
    },
    {
      desc: 'Hypertext Application Language',
      mime: ['application/vnd.hal+xml'],
      ext: ['hal']
    },
    {
      desc: 'ZVUE Media Manager',
      mime: ['application/vnd.handheld-entertainment+xml'],
      ext: ['zmm']
    },
    {
      desc: 'Homebanking Computer Interface (HBCI)',
      mime: ['application/vnd.hbci'],
      ext: ['hbci']
    },
    {
      desc: 'Archipelago Lesson Player',
      mime: ['application/vnd.hhe.lesson-player'],
      ext: ['les']
    },
    {
      desc: 'HP-GL/2 and HP RTL',
      mime: ['application/vnd.hp-hpgl'],
      ext: ['hpgl']
    },
    {
      desc: 'Hewlett Packard Instant Delivery',
      mime: ['application/vnd.hp-hpid'],
      ext: ['hpid']
    },
    {
      desc: "Hewlett-Packard's WebPrintSmart",
      mime: ['application/vnd.hp-hps'],
      ext: ['hps']
    },
    {
      desc: 'HP Indigo Digital Press - Job Layout Languate',
      mime: ['application/vnd.hp-jlyt'],
      ext: ['jlt']
    },
    {
      desc: 'HP Printer Command Language',
      mime: ['application/vnd.hp-pcl'],
      ext: ['pcl']
    },
    {
      desc: 'PCL 6 Enhanced (Formely PCL XL)',
      mime: ['application/vnd.hp-pclxl'],
      ext: ['pclxl']
    },
    {
      desc: 'Hydrostatix Master Suite',
      mime: ['application/vnd.hydrostatix.sof-data'],
      ext: ['sfd-hdstx']
    },
    {
      desc: '3D Crossword Plugin',
      mime: ['application/vnd.hzn-3d-crossword'],
      ext: ['x3d']
    },
    { desc: 'MiniPay', mime: ['application/vnd.ibm.minipay'], ext: ['mpy'] },
    { desc: 'MO:DCA-P', mime: ['application/vnd.ibm.modcap'], ext: ['afp'] },
    {
      desc: 'IBM DB2 Rights Manager',
      mime: ['application/vnd.ibm.rights-management'],
      ext: ['irm']
    },
    {
      desc: 'IBM Electronic Media Management System - Secure Container',
      mime: ['application/vnd.ibm.secure-container'],
      ext: ['sc']
    },
    { desc: 'ICC profile', mime: ['application/vnd.iccprofile'], ext: ['icc'] },
    { desc: 'igLoader', mime: ['application/vnd.igloader'], ext: ['igl'] },
    {
      desc: 'ImmerVision PURE Players',
      mime: ['application/vnd.immervision-ivp'],
      ext: ['ivp']
    },
    {
      desc: 'ImmerVision PURE Players',
      mime: ['application/vnd.immervision-ivu'],
      ext: ['ivu']
    },
    {
      desc: 'IOCOM Visimeet',
      mime: ['application/vnd.insors.igm'],
      ext: ['igm']
    },
    {
      desc: 'Intercon FormNet',
      mime: ['application/vnd.intercon.formnet'],
      ext: ['xpw']
    },
    {
      desc: 'Interactive Geometry Software',
      mime: ['application/vnd.intergeo'],
      ext: ['i2g']
    },
    {
      desc: 'Open Financial Exchange',
      mime: ['application/vnd.intu.qbo'],
      ext: ['qbo']
    },
    { desc: 'Quicken', mime: ['application/vnd.intu.qfx'], ext: ['qfx'] },
    {
      desc: 'IP Unplugged Roaming Client',
      mime: ['application/vnd.ipunplugged.rcprofile'],
      ext: ['rcprofile']
    },
    {
      desc: 'iRepository / Lucidoc Editor',
      mime: ['application/vnd.irepository.package+xml'],
      ext: ['irp']
    },
    {
      desc: 'Express by Infoseek',
      mime: ['application/vnd.is-xpr'],
      ext: ['xpr']
    },
    {
      desc: 'International Society for Advancement of Cytometry',
      mime: ['application/vnd.isac.fcs'],
      ext: ['fcs']
    },
    {
      desc: 'Lightspeed Audio Lab',
      mime: ['application/vnd.jam'],
      ext: ['jam']
    },
    {
      desc: 'Mobile Information Device Profile',
      mime: ['application/vnd.jcp.javame.midlet-rms'],
      ext: ['rms']
    },
    { desc: 'RhymBox', mime: ['application/vnd.jisp'], ext: ['jisp'] },
    {
      desc: 'Joda Archive',
      mime: ['application/vnd.joost.joda-archive'],
      ext: ['joda']
    },
    { desc: 'Kahootz', mime: ['application/vnd.kahootz'], ext: ['ktz'] },
    {
      desc: 'KDE KOffice Office Suite - Karbon',
      mime: ['application/vnd.kde.karbon'],
      ext: ['karbon']
    },
    {
      desc: 'KDE KOffice Office Suite - KChart',
      mime: ['application/vnd.kde.kchart'],
      ext: ['chrt']
    },
    {
      desc: 'KDE KOffice Office Suite - Kformula',
      mime: ['application/vnd.kde.kformula'],
      ext: ['kfo']
    },
    {
      desc: 'KDE KOffice Office Suite - Kivio',
      mime: ['application/vnd.kde.kivio'],
      ext: ['flw']
    },
    {
      desc: 'KDE KOffice Office Suite - Kontour',
      mime: ['application/vnd.kde.kontour'],
      ext: ['kon']
    },
    {
      desc: 'KDE KOffice Office Suite - Kpresenter',
      mime: ['application/vnd.kde.kpresenter'],
      ext: ['kpr']
    },
    {
      desc: 'KDE KOffice Office Suite - Kspread',
      mime: ['application/vnd.kde.kspread'],
      ext: ['ksp']
    },
    {
      desc: 'KDE KOffice Office Suite - Kword',
      mime: ['application/vnd.kde.kword'],
      ext: ['kwd']
    },
    {
      desc: 'Kenamea App',
      mime: ['application/vnd.kenameaapp'],
      ext: ['htke']
    },
    {
      desc: 'Kidspiration',
      mime: ['application/vnd.kidspiration'],
      ext: ['kia']
    },
    {
      desc: 'Kinar Applications',
      mime: ['application/vnd.kinar'],
      ext: ['kne']
    },
    {
      desc: 'SSEYO Koan Play File',
      mime: ['application/vnd.koan'],
      ext: ['skp']
    },
    {
      desc: 'Kodak Storyshare',
      mime: ['application/vnd.kodak-descriptor'],
      ext: ['sse']
    },
    {
      desc: 'Laser App Enterprise',
      mime: ['application/vnd.las.las+xml'],
      ext: ['lasxml']
    },
    {
      desc: 'Life Balance - Desktop Edition',
      mime: ['application/vnd.llamagraphics.life-balance.desktop'],
      ext: ['lbd']
    },
    {
      desc: 'Life Balance - Exchange Format',
      mime: ['application/vnd.llamagraphics.life-balance.exchange+xml'],
      ext: ['lbe']
    },
    {
      desc: 'Lotus 1-2-3',
      mime: ['application/vnd.lotus-1-2-3'],
      ext: ['123']
    },
    {
      desc: 'Lotus Approach',
      mime: ['application/vnd.lotus-approach'],
      ext: ['apr']
    },
    {
      desc: 'Lotus Freelance',
      mime: ['application/vnd.lotus-freelance'],
      ext: ['pre']
    },
    {
      desc: 'Lotus Notes',
      mime: ['application/vnd.lotus-notes'],
      ext: ['nsf']
    },
    {
      desc: 'Lotus Organizer',
      mime: ['application/vnd.lotus-organizer'],
      ext: ['org']
    },
    {
      desc: 'Lotus Screencam',
      mime: ['application/vnd.lotus-screencam'],
      ext: ['scm']
    },
    {
      desc: 'Lotus Wordpro',
      mime: ['application/vnd.lotus-wordpro'],
      ext: ['lwp']
    },
    {
      desc: 'MacPorts Port System',
      mime: ['application/vnd.macports.portpkg'],
      ext: ['portpkg']
    },
    {
      desc: 'Micro CADAM Helix D&D',
      mime: ['application/vnd.mcd'],
      ext: ['mcd']
    },
    { desc: 'MedCalc', mime: ['application/vnd.medcalcdata'], ext: ['mc1'] },
    {
      desc: 'MediaRemote',
      mime: ['application/vnd.mediastation.cdkey'],
      ext: ['cdkey']
    },
    {
      desc: 'Medical Waveform Encoding Format',
      mime: ['application/vnd.mfer'],
      ext: ['mwf']
    },
    {
      desc: 'Melody Format for Mobile Platform',
      mime: ['application/vnd.mfmp'],
      ext: ['mfm']
    },
    {
      desc: 'Micrografx',
      mime: ['application/vnd.micrografx.flo'],
      ext: ['flo']
    },
    {
      desc: 'Micrografx iGrafx Professional',
      mime: ['application/vnd.micrografx.igx'],
      ext: ['igx']
    },
    {
      desc: 'FrameMaker Interchange Format',
      mime: ['application/vnd.mif'],
      ext: ['mif']
    },
    {
      desc: 'Mobius Management Systems - UniversalArchive',
      mime: ['application/vnd.mobius.daf'],
      ext: ['daf']
    },
    {
      desc: 'Mobius Management Systems - Distribution Database',
      mime: ['application/vnd.mobius.dis'],
      ext: ['dis']
    },
    {
      desc: 'Mobius Management Systems - Basket file',
      mime: ['application/vnd.mobius.mbk'],
      ext: ['mbk']
    },
    {
      desc: 'Mobius Management Systems - Query File',
      mime: ['application/vnd.mobius.mqy'],
      ext: ['mqy']
    },
    {
      desc: 'Mobius Management Systems - Script Language',
      mime: ['application/vnd.mobius.msl'],
      ext: ['msl']
    },
    {
      desc: 'Mobius Management Systems - Policy Definition Language File',
      mime: ['application/vnd.mobius.plc'],
      ext: ['plc']
    },
    {
      desc: 'Mobius Management Systems - Topic Index File',
      mime: ['application/vnd.mobius.txf'],
      ext: ['txf']
    },
    {
      desc: 'Mophun VM',
      mime: ['application/vnd.mophun.application'],
      ext: ['mpn']
    },
    {
      desc: 'Mophun Certificate',
      mime: ['application/vnd.mophun.certificate'],
      ext: ['mpc']
    },
    {
      desc: 'XUL - XML User Interface Language',
      mime: ['application/vnd.mozilla.xul+xml'],
      ext: ['xul']
    },
    {
      desc: 'Microsoft Artgalry',
      mime: ['application/vnd.ms-artgalry'],
      ext: ['cil']
    },
    {
      desc: 'Microsoft Cabinet File',
      mime: ['application/vnd.ms-cab-compressed'],
      ext: ['cab']
    },
    {
      desc: 'Microsoft Excel',
      mime: ['application/vnd.ms-excel'],
      ext: ['xls']
    },
    {
      desc: 'Microsoft Excel - Add-In File',
      mime: ['application/vnd.ms-excel.addin.macroenabled.12'],
      ext: ['xlam']
    },
    {
      desc: 'Microsoft Excel - Binary Workbook',
      mime: ['application/vnd.ms-excel.sheet.binary.macroenabled.12'],
      ext: ['xlsb']
    },
    {
      desc: 'Microsoft Excel - Macro-Enabled Workbook',
      mime: ['application/vnd.ms-excel.sheet.macroenabled.12'],
      ext: ['xlsm']
    },
    {
      desc: 'Microsoft Excel - Macro-Enabled Template File',
      mime: ['application/vnd.ms-excel.template.macroenabled.12'],
      ext: ['xltm']
    },
    {
      desc: 'Microsoft Embedded OpenType',
      mime: ['application/vnd.ms-fontobject'],
      ext: ['eot']
    },
    {
      desc: 'Microsoft Html Help File',
      mime: ['application/vnd.ms-htmlhelp'],
      ext: ['chm']
    },
    {
      desc: 'Microsoft Class Server',
      mime: ['application/vnd.ms-ims'],
      ext: ['ims']
    },
    {
      desc: 'Microsoft Learning Resource Module',
      mime: ['application/vnd.ms-lrm'],
      ext: ['lrm']
    },
    {
      desc: 'Microsoft Office System Release Theme',
      mime: ['application/vnd.ms-officetheme'],
      ext: ['thmx']
    },
    {
      desc: 'Microsoft Trust UI Provider - Security Catalog',
      mime: ['application/vnd.ms-pki.seccat'],
      ext: ['cat']
    },
    {
      desc: 'Microsoft Trust UI Provider - Certificate Trust Link',
      mime: ['application/vnd.ms-pki.stl'],
      ext: ['stl']
    },
    {
      desc: 'Microsoft PowerPoint',
      mime: ['application/vnd.ms-powerpoint'],
      ext: ['ppt']
    },
    {
      desc: 'Microsoft PowerPoint - Add-in file',
      mime: ['application/vnd.ms-powerpoint.addin.macroenabled.12'],
      ext: ['ppam']
    },
    {
      desc: 'Microsoft PowerPoint - Macro-Enabled Presentation File',
      mime: ['application/vnd.ms-powerpoint.presentation.macroenabled.12'],
      ext: ['pptm']
    },
    {
      desc: 'Microsoft PowerPoint - Macro-Enabled Open XML Slide',
      mime: ['application/vnd.ms-powerpoint.slide.macroenabled.12'],
      ext: ['sldm']
    },
    {
      desc: 'Microsoft PowerPoint - Macro-Enabled Slide Show File',
      mime: ['application/vnd.ms-powerpoint.slideshow.macroenabled.12'],
      ext: ['ppsm']
    },
    {
      desc: 'Micosoft PowerPoint - Macro-Enabled Template File',
      mime: ['application/vnd.ms-powerpoint.template.macroenabled.12'],
      ext: ['potm']
    },
    {
      desc: 'Microsoft Project',
      mime: ['application/vnd.ms-project'],
      ext: ['mpp']
    },
    {
      desc: 'Micosoft Word - Macro-Enabled Document',
      mime: ['application/vnd.ms-word.document.macroenabled.12'],
      ext: ['docm']
    },
    {
      desc: 'Micosoft Word - Macro-Enabled Template',
      mime: ['application/vnd.ms-word.template.macroenabled.12'],
      ext: ['dotm']
    },
    {
      desc: 'Microsoft Works',
      mime: ['application/vnd.ms-works'],
      ext: ['wps']
    },
    {
      desc: 'Microsoft Windows Media Player Playlist',
      mime: ['application/vnd.ms-wpl'],
      ext: ['wpl']
    },
    {
      desc: 'Microsoft XML Paper Specification',
      mime: ['application/vnd.ms-xpsdocument'],
      ext: ['xps']
    },
    { desc: '3GPP MSEQ File', mime: ['application/vnd.mseq'], ext: ['mseq'] },
    {
      desc:
        'MUsical Score Interpreted Code Invented  for the ASCII designation of Notation',
      mime: ['application/vnd.musician'],
      ext: ['mus']
    },
    {
      desc: 'Muvee Automatic Video Editing',
      mime: ['application/vnd.muvee.style'],
      ext: ['msty']
    },
    {
      desc: 'neuroLanguage',
      mime: ['application/vnd.neurolanguage.nlu'],
      ext: ['nlu']
    },
    {
      desc: 'NobleNet Directory',
      mime: ['application/vnd.noblenet-directory'],
      ext: ['nnd']
    },
    {
      desc: 'NobleNet Sealer',
      mime: ['application/vnd.noblenet-sealer'],
      ext: ['nns']
    },
    {
      desc: 'NobleNet Web',
      mime: ['application/vnd.noblenet-web'],
      ext: ['nnw']
    },
    {
      desc: 'N-Gage Game Data',
      mime: ['application/vnd.nokia.n-gage.data'],
      ext: ['ngdat']
    },
    {
      desc: 'N-Gage Game Installer',
      mime: ['application/vnd.nokia.n-gage.symbian.install'],
      ext: ['n-gage']
    },
    {
      desc: 'Nokia Radio Application - Preset',
      mime: ['application/vnd.nokia.radio-preset'],
      ext: ['rpst']
    },
    {
      desc: 'Nokia Radio Application - Preset',
      mime: ['application/vnd.nokia.radio-presets'],
      ext: ['rpss']
    },
    {
      desc: "Novadigm's RADIA and EDM products",
      mime: ['application/vnd.novadigm.edm'],
      ext: ['edm']
    },
    {
      desc: "Novadigm's RADIA and EDM products",
      mime: ['application/vnd.novadigm.edx'],
      ext: ['edx']
    },
    {
      desc: "Novadigm's RADIA and EDM products",
      mime: ['application/vnd.novadigm.ext'],
      ext: ['ext']
    },
    {
      desc: 'OpenDocument Chart',
      mime: ['application/vnd.oasis.opendocument.chart'],
      ext: ['odc']
    },
    {
      desc: 'OpenDocument Chart Template',
      mime: ['application/vnd.oasis.opendocument.chart-template'],
      ext: ['otc']
    },
    {
      desc: 'OpenDocument Database',
      mime: ['application/vnd.oasis.opendocument.database'],
      ext: ['odb']
    },
    {
      desc: 'OpenDocument Formula',
      mime: ['application/vnd.oasis.opendocument.formula'],
      ext: ['odf']
    },
    {
      desc: 'OpenDocument Formula Template',
      mime: ['application/vnd.oasis.opendocument.formula-template'],
      ext: ['odft']
    },
    {
      desc: 'OpenDocument Graphics',
      mime: ['application/vnd.oasis.opendocument.graphics'],
      ext: ['odg']
    },
    {
      desc: 'OpenDocument Graphics Template',
      mime: ['application/vnd.oasis.opendocument.graphics-template'],
      ext: ['otg']
    },
    {
      desc: 'OpenDocument Image',
      mime: ['application/vnd.oasis.opendocument.image'],
      ext: ['odi']
    },
    {
      desc: 'OpenDocument Image Template',
      mime: ['application/vnd.oasis.opendocument.image-template'],
      ext: ['oti']
    },
    {
      desc: 'OpenDocument Presentation',
      mime: ['application/vnd.oasis.opendocument.presentation'],
      ext: ['odp']
    },
    {
      desc: 'OpenDocument Presentation Template',
      mime: ['application/vnd.oasis.opendocument.presentation-template'],
      ext: ['otp']
    },
    {
      desc: 'OpenDocument Spreadsheet',
      mime: ['application/vnd.oasis.opendocument.spreadsheet'],
      ext: ['ods']
    },
    {
      desc: 'OpenDocument Spreadsheet Template',
      mime: ['application/vnd.oasis.opendocument.spreadsheet-template'],
      ext: ['ots']
    },
    {
      desc: 'OpenDocument Text',
      mime: ['application/vnd.oasis.opendocument.text'],
      ext: ['odt']
    },
    {
      desc: 'OpenDocument Text Master',
      mime: ['application/vnd.oasis.opendocument.text-master'],
      ext: ['odm']
    },
    {
      desc: 'OpenDocument Text Template',
      mime: ['application/vnd.oasis.opendocument.text-template'],
      ext: ['ott']
    },
    {
      desc: 'Open Document Text Web',
      mime: ['application/vnd.oasis.opendocument.text-web'],
      ext: ['oth']
    },
    {
      desc: 'Sugar Linux Application Bundle',
      mime: ['application/vnd.olpc-sugar'],
      ext: ['xo']
    },
    {
      desc: 'OMA Download Agents',
      mime: ['application/vnd.oma.dd2+xml'],
      ext: ['dd2']
    },
    {
      desc: 'Open Office Extension',
      mime: ['application/vnd.openofficeorg.extension'],
      ext: ['oxt']
    },
    {
      desc: 'Microsoft Office - OOXML - Presentation',
      mime: [
        'application/vnd.openxmlformats-officedocument.presentationml.presentation'
      ],
      ext: ['pptx']
    },
    {
      desc: 'Microsoft Office - OOXML - Presentation (Slide)',
      mime: [
        'application/vnd.openxmlformats-officedocument.presentationml.slide'
      ],
      ext: ['sldx']
    },
    {
      desc: 'Microsoft Office - OOXML - Presentation (Slideshow)',
      mime: [
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow'
      ],
      ext: ['ppsx']
    },
    {
      desc: 'Microsoft Office - OOXML - Presentation Template',
      mime: [
        'application/vnd.openxmlformats-officedocument.presentationml.template'
      ],
      ext: ['potx']
    },
    {
      desc: 'Microsoft Office - OOXML - Spreadsheet',
      mime: [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ],
      ext: ['xlsx']
    },
    {
      desc: 'Microsoft Office - OOXML - Spreadsheet Teplate',
      mime: [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template'
      ],
      ext: ['xltx']
    },
    {
      desc: 'Microsoft Office - OOXML - Word Document',
      mime: [
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ],
      ext: ['docx']
    },
    {
      desc: 'Microsoft Office - OOXML - Word Document Template',
      mime: [
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template'
      ],
      ext: ['dotx']
    },
    {
      desc: 'MapGuide DBXML',
      mime: ['application/vnd.osgeo.mapguide.package'],
      ext: ['mgp']
    },
    {
      desc: 'OSGi Deployment Package',
      mime: ['application/vnd.osgi.dp'],
      ext: ['dp']
    },
    { desc: 'PalmOS Data', mime: ['application/vnd.palm'], ext: ['pdb'] },
    { desc: 'PawaaFILE', mime: ['application/vnd.pawaafile'], ext: ['paw'] },
    {
      desc: 'Proprietary P&G Standard Reporting System',
      mime: ['application/vnd.pg.format'],
      ext: ['str']
    },
    {
      desc: 'Proprietary P&G Standard Reporting System',
      mime: ['application/vnd.pg.osasli'],
      ext: ['ei6']
    },
    {
      desc: 'Pcsel eFIF File',
      mime: ['application/vnd.picsel'],
      ext: ['efif']
    },
    {
      desc: "Qualcomm's Plaza Mobile Internet",
      mime: ['application/vnd.pmi.widget'],
      ext: ['wg']
    },
    {
      desc: 'PocketLearn Viewers',
      mime: ['application/vnd.pocketlearn'],
      ext: ['plf']
    },
    {
      desc: 'PowerBuilder',
      mime: ['application/vnd.powerbuilder6'],
      ext: ['pbd']
    },
    {
      desc: 'Preview Systems ZipLock/VBox',
      mime: ['application/vnd.previewsystems.box'],
      ext: ['box']
    },
    {
      desc: 'EFI Proteus',
      mime: ['application/vnd.proteus.magazine'],
      ext: ['mgz']
    },
    {
      desc: 'PubliShare Objects',
      mime: ['application/vnd.publishare-delta-tree'],
      ext: ['qps']
    },
    {
      desc: 'Princeton Video Image',
      mime: ['application/vnd.pvi.ptid1'],
      ext: ['ptid']
    },
    {
      desc: 'QuarkXpress',
      mime: ['application/vnd.quark.quarkxpress'],
      ext: ['qxd']
    },
    { desc: 'RealVNC', mime: ['application/vnd.realvnc.bed'], ext: ['bed'] },
    {
      desc: 'Recordare Applications',
      mime: ['application/vnd.recordare.musicxml'],
      ext: ['mxl']
    },
    {
      desc: 'Recordare Applications',
      mime: ['application/vnd.recordare.musicxml+xml'],
      ext: ['musicxml']
    },
    {
      desc: 'CryptoNote',
      mime: ['application/vnd.rig.cryptonote'],
      ext: ['cryptonote']
    },
    {
      desc: 'Blackberry COD File',
      mime: ['application/vnd.rim.cod'],
      ext: ['cod']
    },
    { desc: 'RealMedia', mime: ['application/vnd.rn-realmedia'], ext: ['rm'] },
    {
      desc: 'ROUTE 66 Location Based Services',
      mime: ['application/vnd.route66.link66+xml'],
      ext: ['link66']
    },
    {
      desc: 'SailingTracker',
      mime: ['application/vnd.sailingtracker.track'],
      ext: ['st']
    },
    { desc: 'SeeMail', mime: ['application/vnd.seemail'], ext: ['see'] },
    { desc: 'Secured eMail', mime: ['application/vnd.sema'], ext: ['sema'] },
    { desc: 'Secured eMail', mime: ['application/vnd.semd'], ext: ['semd'] },
    { desc: 'Secured eMail', mime: ['application/vnd.semf'], ext: ['semf'] },
    {
      desc: 'Shana Informed Filler',
      mime: ['application/vnd.shana.informed.formdata'],
      ext: ['ifm']
    },
    {
      desc: 'Shana Informed Filler',
      mime: ['application/vnd.shana.informed.formtemplate'],
      ext: ['itp']
    },
    {
      desc: 'Shana Informed Filler',
      mime: ['application/vnd.shana.informed.interchange'],
      ext: ['iif']
    },
    {
      desc: 'Shana Informed Filler',
      mime: ['application/vnd.shana.informed.package'],
      ext: ['ipk']
    },
    {
      desc: 'SimTech MindMapper',
      mime: ['application/vnd.simtech-mindmapper'],
      ext: ['twd']
    },
    { desc: 'SMAF File', mime: ['application/vnd.smaf'], ext: ['mmf'] },
    {
      desc: 'SMART Technologies Apps',
      mime: ['application/vnd.smart.teacher'],
      ext: ['teacher']
    },
    {
      desc: 'SudokuMagic',
      mime: ['application/vnd.solent.sdkm+xml'],
      ext: ['sdkm']
    },
    {
      desc: 'TIBCO Spotfire',
      mime: ['application/vnd.spotfire.dxp'],
      ext: ['dxp']
    },
    {
      desc: 'TIBCO Spotfire',
      mime: ['application/vnd.spotfire.sfs'],
      ext: ['sfs']
    },
    {
      desc: 'StarOffice - Calc',
      mime: ['application/vnd.stardivision.calc'],
      ext: ['sdc']
    },
    {
      desc: 'StarOffice - Draw',
      mime: ['application/vnd.stardivision.draw'],
      ext: ['sda']
    },
    {
      desc: 'StarOffice - Impress',
      mime: ['application/vnd.stardivision.impress'],
      ext: ['sdd']
    },
    {
      desc: 'StarOffice - Math',
      mime: ['application/vnd.stardivision.math'],
      ext: ['smf']
    },
    {
      desc: 'StarOffice - Writer',
      mime: ['application/vnd.stardivision.writer'],
      ext: ['sdw']
    },
    {
      desc: 'StarOffice - Writer  (Global)',
      mime: ['application/vnd.stardivision.writer-global'],
      ext: ['sgl']
    },
    {
      desc: 'StepMania',
      mime: ['application/vnd.stepmania.stepchart'],
      ext: ['sm']
    },
    {
      desc: 'OpenOffice - Calc (Spreadsheet)',
      mime: ['application/vnd.sun.xml.calc'],
      ext: ['sxc']
    },
    {
      desc: 'OpenOffice - Calc Template (Spreadsheet)',
      mime: ['application/vnd.sun.xml.calc.template'],
      ext: ['stc']
    },
    {
      desc: 'OpenOffice - Draw (Graphics)',
      mime: ['application/vnd.sun.xml.draw'],
      ext: ['sxd']
    },
    {
      desc: 'OpenOffice - Draw Template (Graphics)',
      mime: ['application/vnd.sun.xml.draw.template'],
      ext: ['std']
    },
    {
      desc: 'OpenOffice - Impress (Presentation)',
      mime: ['application/vnd.sun.xml.impress'],
      ext: ['sxi']
    },
    {
      desc: 'OpenOffice - Impress Template (Presentation)',
      mime: ['application/vnd.sun.xml.impress.template'],
      ext: ['sti']
    },
    {
      desc: 'OpenOffice - Math (Formula)',
      mime: ['application/vnd.sun.xml.math'],
      ext: ['sxm']
    },
    {
      desc: 'OpenOffice - Writer (Text - HTML)',
      mime: ['application/vnd.sun.xml.writer'],
      ext: ['sxw']
    },
    {
      desc: 'OpenOffice - Writer (Text - HTML)',
      mime: ['application/vnd.sun.xml.writer.global'],
      ext: ['sxg']
    },
    {
      desc: 'OpenOffice - Writer Template (Text - HTML)',
      mime: ['application/vnd.sun.xml.writer.template'],
      ext: ['stw']
    },
    {
      desc: 'ScheduleUs',
      mime: ['application/vnd.sus-calendar'],
      ext: ['sus']
    },
    {
      desc: 'SourceView Document',
      mime: ['application/vnd.svd'],
      ext: ['svd']
    },
    {
      desc: 'Symbian Install Package',
      mime: ['application/vnd.symbian.install'],
      ext: ['sis']
    },
    { desc: 'SyncML', mime: ['application/vnd.syncml+xml'], ext: ['xsm'] },
    {
      desc: 'SyncML - Device Management',
      mime: ['application/vnd.syncml.dm+wbxml'],
      ext: ['bdm']
    },
    {
      desc: 'SyncML - Device Management',
      mime: ['application/vnd.syncml.dm+xml'],
      ext: ['xdm']
    },
    {
      desc: 'Tao Intent',
      mime: ['application/vnd.tao.intent-module-archive'],
      ext: ['tao']
    },
    {
      desc: 'MobileTV',
      mime: ['application/vnd.tmobile-livetv'],
      ext: ['tmo']
    },
    {
      desc: 'TRI Systems Config',
      mime: ['application/vnd.trid.tpt'],
      ext: ['tpt']
    },
    {
      desc: 'Triscape Map Explorer',
      mime: ['application/vnd.triscape.mxs'],
      ext: ['mxs']
    },
    { desc: 'True BASIC', mime: ['application/vnd.trueapp'], ext: ['tra'] },
    {
      desc: 'Universal Forms Description Language',
      mime: ['application/vnd.ufdl'],
      ext: ['ufd']
    },
    {
      desc: 'User Interface Quartz - Theme (Symbian)',
      mime: ['application/vnd.uiq.theme'],
      ext: ['utz']
    },
    { desc: 'UMAJIN', mime: ['application/vnd.umajin'], ext: ['umj'] },
    { desc: 'Unity 3d', mime: ['application/vnd.unity'], ext: ['unityweb'] },
    {
      desc: 'Unique Object Markup Language',
      mime: ['application/vnd.uoml+xml'],
      ext: ['uoml']
    },
    { desc: 'VirtualCatalog', mime: ['application/vnd.vcx'], ext: ['vcx'] },
    { desc: 'Microsoft Visio', mime: ['application/vnd.visio'], ext: ['vsd'] },
    { desc: 'Visionary', mime: ['application/vnd.visionary'], ext: ['vis'] },
    { desc: 'Viewport+', mime: ['application/vnd.vsf'], ext: ['vsf'] },
    {
      desc: 'WAP Binary XML (WBXML)',
      mime: ['application/vnd.wap.wbxml'],
      ext: ['wbxml']
    },
    {
      desc: 'Compiled Wireless Markup Language (WMLC)',
      mime: ['application/vnd.wap.wmlc'],
      ext: ['wmlc']
    },
    {
      desc: 'WMLScript',
      mime: ['application/vnd.wap.wmlscriptc'],
      ext: ['wmlsc']
    },
    { desc: 'WebTurbo', mime: ['application/vnd.webturbo'], ext: ['wtb'] },
    {
      desc: 'Mathematica Notebook Player',
      mime: ['application/vnd.wolfram.player'],
      ext: ['nbp']
    },
    {
      desc: 'Wordperfect',
      mime: ['application/vnd.wordperfect'],
      ext: ['wpd']
    },
    { desc: 'SundaHus WQ', mime: ['application/vnd.wqd'], ext: ['wqd'] },
    { desc: 'Worldtalk', mime: ['application/vnd.wt.stf'], ext: ['stf'] },
    { desc: 'CorelXARA', mime: ['application/vnd.xara'], ext: ['xar'] },
    {
      desc: 'Extensible Forms Description Language',
      mime: ['application/vnd.xfdl'],
      ext: ['xfdl']
    },
    {
      desc: 'HV Voice Dictionary',
      mime: ['application/vnd.yamaha.hv-dic'],
      ext: ['hvd']
    },
    {
      desc: 'HV Script',
      mime: ['application/vnd.yamaha.hv-script'],
      ext: ['hvs']
    },
    {
      desc: 'HV Voice Parameter',
      mime: ['application/vnd.yamaha.hv-voice'],
      ext: ['hvp']
    },
    {
      desc: 'Open Score Format',
      mime: ['application/vnd.yamaha.openscoreformat'],
      ext: ['osf']
    },
    {
      desc: 'OSFPVG',
      mime: ['application/vnd.yamaha.openscoreformat.osfpvg+xml'],
      ext: ['osfpvg']
    },
    {
      desc: 'SMAF Audio',
      mime: ['application/vnd.yamaha.smaf-audio'],
      ext: ['saf']
    },
    {
      desc: 'SMAF Phrase',
      mime: ['application/vnd.yamaha.smaf-phrase'],
      ext: ['spf']
    },
    {
      desc: 'CustomMenu',
      mime: ['application/vnd.yellowriver-custom-menu'],
      ext: ['cmp']
    },
    { desc: 'Z.U.L. Geometry', mime: ['application/vnd.zul'], ext: ['zir'] },
    {
      desc: 'Zzazz Deck',
      mime: ['application/vnd.zzazz.deck+xml'],
      ext: ['zaz']
    },
    { desc: 'VoiceXML', mime: ['application/voicexml+xml'], ext: ['vxml'] },
    {
      desc: 'Widget Packaging and XML Configuration',
      mime: ['application/widget'],
      ext: ['wgt']
    },
    { desc: 'WinHelp', mime: ['application/winhlp'], ext: ['hlp'] },
    {
      desc: 'WSDL - Web Services Description Language',
      mime: ['application/wsdl+xml'],
      ext: ['wsdl']
    },
    {
      desc: 'Web Services Policy',
      mime: ['application/wspolicy+xml'],
      ext: ['wspolicy']
    },
    { desc: '7-Zip', mime: ['application/x-7z-compressed'], ext: ['7z'] },
    { desc: 'AbiWord', mime: ['application/x-abiword'], ext: ['abw'] },
    {
      desc: 'Ace Archive',
      mime: ['application/x-ace-compressed'],
      ext: ['ace']
    },
    {
      desc: 'Adobe (Macropedia) Authorware - Binary File',
      mime: ['application/x-authorware-bin'],
      ext: ['aab']
    },
    {
      desc: 'Adobe (Macropedia) Authorware - Map',
      mime: ['application/x-authorware-map'],
      ext: ['aam']
    },
    {
      desc: 'Adobe (Macropedia) Authorware - Segment File',
      mime: ['application/x-authorware-seg'],
      ext: ['aas']
    },
    {
      desc: 'Binary CPIO Archive',
      mime: ['application/x-bcpio'],
      ext: ['bcpio']
    },
    {
      desc: 'BitTorrent',
      mime: ['application/x-bittorrent'],
      ext: ['torrent']
    },
    { desc: 'Bzip Archive', mime: ['application/x-bzip'], ext: ['bz'] },
    { desc: 'Bzip2 Archive', mime: ['application/x-bzip2'], ext: ['bz2'] },
    { desc: 'Video CD', mime: ['application/x-cdlink'], ext: ['vcd'] },
    { desc: 'pIRCh', mime: ['application/x-chat'], ext: ['chat'] },
    {
      desc: 'Portable Game Notation (Chess Games)',
      mime: ['application/x-chess-pgn'],
      ext: ['pgn']
    },
    { desc: 'CPIO Archive', mime: ['application/x-cpio'], ext: ['cpio'] },
    { desc: 'C Shell Script', mime: ['application/x-csh'], ext: ['csh'] },
    {
      desc: 'Debian Package',
      mime: ['application/x-debian-package'],
      ext: ['deb']
    },
    {
      desc: 'Adobe Shockwave Player',
      mime: ['application/x-director'],
      ext: ['dir']
    },
    { desc: 'Doom Video Game', mime: ['application/x-doom'], ext: ['wad'] },
    {
      desc: 'Navigation Control file for XML (for ePub)',
      mime: ['application/x-dtbncx+xml'],
      ext: ['ncx']
    },
    {
      desc: 'Digital Talking Book',
      mime: ['application/x-dtbook+xml'],
      ext: ['dtb']
    },
    {
      desc: 'Digital Talking Book - Resource File',
      mime: ['application/x-dtbresource+xml'],
      ext: ['res']
    },
    {
      desc: 'Device Independent File Format (DVI)',
      mime: ['application/x-dvi'],
      ext: ['dvi']
    },
    {
      desc: 'Glyph Bitmap Distribution Format',
      mime: ['application/x-font-bdf'],
      ext: ['bdf']
    },
    {
      desc: 'Ghostscript Font',
      mime: ['application/x-font-ghostscript'],
      ext: ['gsf']
    },
    { desc: 'PSF Fonts', mime: ['application/x-font-linux-psf'], ext: ['psf'] },
    {
      desc: 'OpenType Font File',
      mime: ['application/x-font-otf'],
      ext: ['otf']
    },
    {
      desc: 'Portable Compiled Format',
      mime: ['application/x-font-pcf'],
      ext: ['pcf']
    },
    {
      desc: 'Server Normal Format',
      mime: ['application/x-font-snf'],
      ext: ['snf']
    },
    { desc: 'TrueType Font', mime: ['application/x-font-ttf'], ext: ['ttf'] },
    {
      desc: 'PostScript Fonts',
      mime: ['application/x-font-type1'],
      ext: ['pfa']
    },
    {
      desc: 'Web Open Font Format',
      mime: ['application/x-font-woff'],
      ext: ['woff']
    },
    {
      desc: 'FutureSplash Animator',
      mime: ['application/x-futuresplash'],
      ext: ['spl']
    },
    { desc: 'Gnumeric', mime: ['application/x-gnumeric'], ext: ['gnumeric'] },
    { desc: 'GNU Tar Files', mime: ['application/x-gtar'], ext: ['gtar'] },
    {
      desc: 'Hierarchical Data Format',
      mime: ['application/x-hdf'],
      ext: ['hdf']
    },
    {
      desc: 'Java Network Launching Protocol',
      mime: ['application/x-java-jnlp-file'],
      ext: ['jnlp']
    },
    { desc: 'LaTeX', mime: ['application/x-latex'], ext: ['latex'] },
    {
      desc: 'Mobipocket',
      mime: ['application/x-mobipocket-ebook'],
      ext: ['prc']
    },
    {
      desc: 'Microsoft ClickOnce',
      mime: ['application/x-ms-application'],
      ext: ['application']
    },
    {
      desc: 'Microsoft Windows Media Player Download Package',
      mime: ['application/x-ms-wmd'],
      ext: ['wmd']
    },
    {
      desc: 'Microsoft Windows Media Player Skin Package',
      mime: ['application/x-ms-wmz'],
      ext: ['wmz']
    },
    {
      desc: 'Microsoft XAML Browser Application',
      mime: ['application/x-ms-xbap'],
      ext: ['xbap']
    },
    {
      desc: 'Microsoft Access',
      mime: ['application/x-msaccess'],
      ext: ['mdb']
    },
    {
      desc: 'Microsoft Office Binder',
      mime: ['application/x-msbinder'],
      ext: ['obd']
    },
    {
      desc: 'Microsoft Information Card',
      mime: ['application/x-mscardfile'],
      ext: ['crd']
    },
    {
      desc: 'Microsoft Clipboard Clip',
      mime: ['application/x-msclip'],
      ext: ['clp']
    },
    {
      desc: 'Microsoft Application',
      mime: ['application/x-msdownload'],
      ext: ['exe']
    },
    {
      desc: 'Microsoft MediaView',
      mime: ['application/x-msmediaview'],
      ext: ['mvb']
    },
    {
      desc: 'Microsoft Windows Metafile',
      mime: ['application/x-msmetafile'],
      ext: ['wmf']
    },
    { desc: 'Microsoft Money', mime: ['application/x-msmoney'], ext: ['mny'] },
    {
      desc: 'Microsoft Publisher',
      mime: ['application/x-mspublisher'],
      ext: ['pub']
    },
    {
      desc: 'Microsoft Schedule+',
      mime: ['application/x-msschedule'],
      ext: ['scd']
    },
    {
      desc: 'Microsoft Windows Terminal Services',
      mime: ['application/x-msterminal'],
      ext: ['trm']
    },
    {
      desc: 'Microsoft Wordpad',
      mime: ['application/x-mswrite'],
      ext: ['wri']
    },
    {
      desc: 'Network Common Data Form (NetCDF)',
      mime: ['application/x-netcdf'],
      ext: ['nc']
    },
    {
      desc: 'PKCS #12 - Personal Information Exchange Syntax Standard',
      mime: ['application/x-pkcs12'],
      ext: ['p12']
    },
    {
      desc: 'PKCS #7 - Cryptographic Message Syntax Standard (Certificates)',
      mime: ['application/x-pkcs7-certificates'],
      ext: ['p7b']
    },
    {
      desc:
        'PKCS #7 - Cryptographic Message Syntax Standard (Certificate Request Response)',
      mime: ['application/x-pkcs7-certreqresp'],
      ext: ['p7r']
    },
    {
      desc: 'RAR Archive',
      mime: ['application/x-rar-compressed'],
      ext: ['rar']
    },
    { desc: 'Bourne Shell Script', mime: ['application/x-sh'], ext: ['sh'] },
    { desc: 'Shell Archive', mime: ['application/x-shar'], ext: ['shar'] },
    {
      desc: 'Adobe Flash',
      mime: ['application/x-shockwave-flash'],
      ext: ['swf']
    },
    {
      desc: 'Microsoft Silverlight',
      mime: ['application/x-silverlight-app'],
      ext: ['xap']
    },
    { desc: 'Stuffit Archive', mime: ['application/x-stuffit'], ext: ['sit'] },
    {
      desc: 'Stuffit Archive',
      mime: ['application/x-stuffitx'],
      ext: ['sitx']
    },
    {
      desc: 'System V Release 4 CPIO Archive',
      mime: ['application/x-sv4cpio'],
      ext: ['sv4cpio']
    },
    {
      desc: 'System V Release 4 CPIO Checksum Data',
      mime: ['application/x-sv4crc'],
      ext: ['sv4crc']
    },
    {
      desc: 'Tar File (Tape Archive)',
      mime: ['application/x-tar'],
      ext: ['tar']
    },
    { desc: 'Tcl Script', mime: ['application/x-tcl'], ext: ['tcl'] },
    { desc: 'TeX', mime: ['application/x-tex'], ext: ['tex'] },
    { desc: 'TeX Font Metric', mime: ['application/x-tex-tfm'], ext: ['tfm'] },
    {
      desc: 'GNU Texinfo Document',
      mime: ['application/x-texinfo'],
      ext: ['texinfo']
    },
    {
      desc: 'Ustar (Uniform Standard Tape Archive)',
      mime: ['application/x-ustar'],
      ext: ['ustar']
    },
    { desc: 'WAIS Source', mime: ['application/x-wais-source'], ext: ['src'] },
    {
      desc: 'X.509 Certificate',
      mime: ['application/x-x509-ca-cert'],
      ext: ['der']
    },
    { desc: 'Xfig', mime: ['application/x-xfig'], ext: ['fig'] },
    {
      desc: 'XPInstall - Mozilla',
      mime: ['application/x-xpinstall'],
      ext: ['xpi']
    },
    {
      desc: 'XML Configuration Access Protocol - XCAP Diff',
      mime: ['application/xcap-diff+xml'],
      ext: ['xdf']
    },
    {
      desc: 'XML Encryption Syntax and Processing',
      mime: ['application/xenc+xml'],
      ext: ['xenc']
    },
    {
      desc: 'XHTML - The Extensible HyperText Markup Language',
      mime: ['application/xhtml+xml'],
      ext: ['xhtml']
    },
    {
      desc: 'XML - Extensible Markup Language',
      mime: ['application/xml'],
      ext: ['xml']
    },
    {
      desc: 'Document Type Definition',
      mime: ['application/xml-dtd'],
      ext: ['dtd']
    },
    {
      desc: 'XML-Binary Optimized Packaging',
      mime: ['application/xop+xml'],
      ext: ['xop']
    },
    {
      desc: 'XML Transformations',
      mime: ['application/xslt+xml'],
      ext: ['xslt']
    },
    {
      desc: 'XSPF - XML Shareable Playlist Format',
      mime: ['application/xspf+xml'],
      ext: ['xspf']
    },
    { desc: 'MXML', mime: ['application/xv+xml'], ext: ['mxml'] },
    {
      desc: 'YANG Data Modeling Language',
      mime: ['application/yang'],
      ext: ['yang']
    },
    { desc: 'YIN (YANG - XML)', mime: ['application/yin+xml'], ext: ['yin'] },
    { desc: 'Zip Archive', mime: ['application/zip'], ext: ['zip'] },
    {
      desc: 'Adaptive differential pulse-code modulation',
      mime: ['audio/adpcm'],
      ext: ['adp']
    },
    { desc: 'Sun Audio - Au file format', mime: ['audio/basic'], ext: ['au'] },
    {
      desc: 'MIDI - Musical Instrument Digital Interface',
      mime: ['audio/midi'],
      ext: ['mid']
    },
    { desc: 'MPEG-4 Audio', mime: ['audio/mp4'], ext: ['mp4a'] },
    { desc: 'MPEG Audio', mime: ['audio/mpeg'], ext: ['mpga'] },
    { desc: 'Ogg Audio', mime: ['audio/ogg'], ext: ['oga'] },
    { desc: 'DECE Audio', mime: ['audio/vnd.dece.audio'], ext: ['uva'] },
    {
      desc: 'Digital Winds Music',
      mime: ['audio/vnd.digital-winds'],
      ext: ['eol']
    },
    { desc: 'DRA Audio', mime: ['audio/vnd.dra'], ext: ['dra'] },
    { desc: 'DTS Audio', mime: ['audio/vnd.dts'], ext: ['dts'] },
    {
      desc: 'DTS High Definition Audio',
      mime: ['audio/vnd.dts.hd'],
      ext: ['dtshd']
    },
    { desc: 'Lucent Voice', mime: ['audio/vnd.lucent.voice'], ext: ['lvp'] },
    {
      desc: 'Microsoft PlayReady Ecosystem',
      mime: ['audio/vnd.ms-playready.media.pya'],
      ext: ['pya']
    },
    {
      desc: 'Nuera ECELP 4800',
      mime: ['audio/vnd.nuera.ecelp4800'],
      ext: ['ecelp4800']
    },
    {
      desc: 'Nuera ECELP 7470',
      mime: ['audio/vnd.nuera.ecelp7470'],
      ext: ['ecelp7470']
    },
    {
      desc: 'Nuera ECELP 9600',
      mime: ['audio/vnd.nuera.ecelp9600'],
      ext: ['ecelp9600']
    },
    { desc: "Hit'n'Mix", mime: ['audio/vnd.rip'], ext: ['rip'] },
    {
      desc: 'Open Web Media Project - Audio',
      mime: ['audio/webm'],
      ext: ['weba']
    },
    {
      desc: 'Advanced Audio Coding (AAC)',
      mime: ['audio/x-aac'],
      ext: ['aac']
    },
    {
      desc: 'Audio Interchange File Format',
      mime: ['audio/x-aiff'],
      ext: ['aif']
    },
    {
      desc: 'M3U (Multimedia Playlist)',
      mime: ['audio/x-mpegurl'],
      ext: ['m3u']
    },
    {
      desc: 'Microsoft Windows Media Audio Redirector',
      mime: ['audio/x-ms-wax'],
      ext: ['wax']
    },
    {
      desc: 'Microsoft Windows Media Audio',
      mime: ['audio/x-ms-wma'],
      ext: ['wma']
    },
    { desc: 'Real Audio Sound', mime: ['audio/x-pn-realaudio'], ext: ['ram'] },
    {
      desc: 'Real Audio Sound',
      mime: ['audio/x-pn-realaudio-plugin'],
      ext: ['rmp']
    },
    {
      desc: 'Waveform Audio File Format (WAV)',
      mime: ['audio/x-wav'],
      ext: ['wav']
    },
    { desc: 'ChemDraw eXchange file', mime: ['chemical/x-cdx'], ext: ['cdx'] },
    {
      desc: 'Crystallographic Interchange Format',
      mime: ['chemical/x-cif'],
      ext: ['cif']
    },
    {
      desc: 'CrystalMaker Data Format',
      mime: ['chemical/x-cmdf'],
      ext: ['cmdf']
    },
    {
      desc: 'Chemical Markup Language',
      mime: ['chemical/x-cml'],
      ext: ['cml']
    },
    {
      desc: 'Chemical Style Markup Language',
      mime: ['chemical/x-csml'],
      ext: ['csml']
    },
    { desc: 'XYZ File Format', mime: ['chemical/x-xyz'], ext: ['xyz'] },
    { desc: 'Bitmap Image File', mime: ['image/bmp'], ext: ['bmp'] },
    { desc: 'Computer Graphics Metafile', mime: ['image/cgm'], ext: ['cgm'] },
    { desc: 'G3 Fax Image', mime: ['image/g3fax'], ext: ['g3'] },
    { desc: 'Graphics Interchange Format', mime: ['image/gif'], ext: ['gif'] },
    { desc: 'Image Exchange Format', mime: ['image/ief'], ext: ['ief'] },
    { desc: 'JPEG Image', mime: ['image/jpeg'], ext: ['jpeg', 'jpg'] },
    { desc: 'OpenGL Textures (KTX)', mime: ['image/ktx'], ext: ['ktx'] },
    {
      desc: 'Portable Network Graphics (PNG)',
      mime: ['image/png'],
      ext: ['png']
    },
    { desc: 'BTIF', mime: ['image/prs.btif'], ext: ['btif'] },
    {
      desc: 'Scalable Vector Graphics (SVG)',
      mime: ['image/svg+xml'],
      ext: ['svg']
    },
    { desc: 'Tagged Image File Format', mime: ['image/tiff'], ext: ['tiff'] },
    {
      desc: 'Photoshop Document',
      mime: ['image/vnd.adobe.photoshop'],
      ext: ['psd']
    },
    { desc: 'DECE Graphic', mime: ['image/vnd.dece.graphic'], ext: ['uvi'] },
    {
      desc: 'Close Captioning - Subtitle',
      mime: ['image/vnd.dvb.subtitle'],
      ext: ['sub']
    },
    { desc: 'DjVu', mime: ['image/vnd.djvu'], ext: ['djvu'] },
    { desc: 'DWG Drawing', mime: ['image/vnd.dwg'], ext: ['dwg'] },
    { desc: 'AutoCAD DXF', mime: ['image/vnd.dxf'], ext: ['dxf'] },
    { desc: 'FastBid Sheet', mime: ['image/vnd.fastbidsheet'], ext: ['fbs'] },
    { desc: 'FlashPix', mime: ['image/vnd.fpx'], ext: ['fpx'] },
    {
      desc: 'FAST Search & Transfer ASA',
      mime: ['image/vnd.fst'],
      ext: ['fst']
    },
    {
      desc: 'EDMICS 2000',
      mime: ['image/vnd.fujixerox.edmics-mmr'],
      ext: ['mmr']
    },
    {
      desc: 'EDMICS 2000',
      mime: ['image/vnd.fujixerox.edmics-rlc'],
      ext: ['rlc']
    },
    {
      desc: 'Microsoft Document Imaging Format',
      mime: ['image/vnd.ms-modi'],
      ext: ['mdi']
    },
    { desc: 'FlashPix', mime: ['image/vnd.net-fpx'], ext: ['npx'] },
    { desc: 'WAP Bitamp (WBMP)', mime: ['image/vnd.wap.wbmp'], ext: ['wbmp'] },
    {
      desc: 'eXtended Image File Format (XIFF)',
      mime: ['image/vnd.xiff'],
      ext: ['xif']
    },
    { desc: 'WebP Image', mime: ['image/webp'], ext: ['webp'] },
    { desc: 'CMU Image', mime: ['image/x-cmu-raster'], ext: ['ras'] },
    {
      desc: 'Corel Metafile Exchange (CMX)',
      mime: ['image/x-cmx'],
      ext: ['cmx']
    },
    { desc: 'FreeHand MX', mime: ['image/x-freehand'], ext: ['fh'] },
    { desc: 'Icon Image', mime: ['image/x-icon'], ext: ['ico'] },
    { desc: 'PCX Image', mime: ['image/x-pcx'], ext: ['pcx'] },
    { desc: 'PICT Image', mime: ['image/x-pict'], ext: ['pic'] },
    {
      desc: 'Portable Anymap Image',
      mime: ['image/x-portable-anymap'],
      ext: ['pnm']
    },
    {
      desc: 'Portable Bitmap Format',
      mime: ['image/x-portable-bitmap'],
      ext: ['pbm']
    },
    {
      desc: 'Portable Graymap Format',
      mime: ['image/x-portable-graymap'],
      ext: ['pgm']
    },
    {
      desc: 'Portable Pixmap Format',
      mime: ['image/x-portable-pixmap'],
      ext: ['ppm']
    },
    {
      desc: 'Silicon Graphics RGB Bitmap',
      mime: ['image/x-rgb'],
      ext: ['rgb']
    },
    { desc: 'X BitMap', mime: ['image/x-xbitmap'], ext: ['xbm'] },
    { desc: 'X PixMap', mime: ['image/x-xpixmap'], ext: ['xpm'] },
    { desc: 'X Window Dump', mime: ['image/x-xwindowdump'], ext: ['xwd'] },
    { desc: 'Email Message', mime: ['message/rfc822'], ext: ['eml'] },
    {
      desc: 'Initial Graphics Exchange Specification (IGES)',
      mime: ['model/iges'],
      ext: ['igs']
    },
    { desc: 'Mesh Data Type', mime: ['model/mesh'], ext: ['msh'] },
    { desc: 'COLLADA', mime: ['model/vnd.collada+xml'], ext: ['dae'] },
    {
      desc: 'Autodesk Design Web Format (DWF)',
      mime: ['model/vnd.dwf'],
      ext: ['dwf']
    },
    {
      desc: 'Geometric Description Language (GDL)',
      mime: ['model/vnd.gdl'],
      ext: ['gdl']
    },
    { desc: 'Gen-Trix Studio', mime: ['model/vnd.gtw'], ext: ['gtw'] },
    { desc: 'Virtue MTS', mime: ['model/vnd.mts'], ext: ['mts'] },
    { desc: 'Virtue VTU', mime: ['model/vnd.vtu'], ext: ['vtu'] },
    {
      desc: 'Virtual Reality Modeling Language',
      mime: ['model/vrml'],
      ext: ['wrl']
    },
    { desc: 'iCalendar', mime: ['text/calendar'], ext: ['ics'] },
    { desc: 'Cascading Style Sheets (CSS)', mime: ['text/css'], ext: ['css'] },
    { desc: 'Comma-Seperated Values', mime: ['text/csv'], ext: ['csv'] },
    {
      desc: 'HyperText Markup Language (HTML)',
      mime: ['text/html'],
      ext: ['html']
    },
    { desc: 'Notation3', mime: ['text/n3'], ext: ['n3'] },
    { desc: 'Text File', mime: ['text/plain'], ext: ['txt'] },
    { desc: 'PRS Lines Tag', mime: ['text/prs.lines.tag'], ext: ['dsc'] },
    { desc: 'Rich Text Format (RTF)', mime: ['text/richtext'], ext: ['rtx'] },
    {
      desc: 'Standard Generalized Markup Language (SGML)',
      mime: ['text/sgml'],
      ext: ['sgml']
    },
    {
      desc: 'Tab Seperated Values',
      mime: ['text/tab-separated-values'],
      ext: ['tsv']
    },
    { desc: 'troff', mime: ['text/troff'], ext: ['t'] },
    {
      desc: 'Turtle (Terse RDF Triple Language)',
      mime: ['text/turtle'],
      ext: ['ttl']
    },
    { desc: 'URI Resolution Services', mime: ['text/uri-list'], ext: ['uri'] },
    { desc: 'Curl - Applet', mime: ['text/vnd.curl'], ext: ['curl'] },
    {
      desc: 'Curl - Detached Applet',
      mime: ['text/vnd.curl.dcurl'],
      ext: ['dcurl']
    },
    {
      desc: 'Curl - Source Code',
      mime: ['text/vnd.curl.scurl'],
      ext: ['scurl']
    },
    {
      desc: 'Curl - Manifest File',
      mime: ['text/vnd.curl.mcurl'],
      ext: ['mcurl']
    },
    { desc: 'mod_fly / fly.cgi', mime: ['text/vnd.fly'], ext: ['fly'] },
    { desc: 'FLEXSTOR', mime: ['text/vnd.fmi.flexstor'], ext: ['flx'] },
    { desc: 'Graphviz', mime: ['text/vnd.graphviz'], ext: ['gv'] },
    { desc: 'In3D - 3DML', mime: ['text/vnd.in3d.3dml'], ext: ['3dml'] },
    { desc: 'In3D - 3DML', mime: ['text/vnd.in3d.spot'], ext: ['spot'] },
    {
      desc: 'J2ME App Descriptor',
      mime: ['text/vnd.sun.j2me.app-descriptor'],
      ext: ['jad']
    },
    {
      desc: 'Wireless Markup Language (WML)',
      mime: ['text/vnd.wap.wml'],
      ext: ['wml']
    },
    {
      desc: 'Wireless Markup Language Script (WMLScript)',
      mime: ['text/vnd.wap.wmlscript'],
      ext: ['wmls']
    },
    { desc: 'Assembler Source File', mime: ['text/x-asm'], ext: ['s'] },
    { desc: 'C Source File', mime: ['text/x-c'], ext: ['c'] },
    { desc: 'Fortran Source File', mime: ['text/x-fortran'], ext: ['f'] },
    { desc: 'Pascal Source File', mime: ['text/x-pascal'], ext: ['p'] },
    {
      desc: 'Java Source File',
      mime: ['text/x-java-source,java'],
      ext: ['java']
    },
    { desc: 'Setext', mime: ['text/x-setext'], ext: ['etx'] },
    { desc: 'UUEncode', mime: ['text/x-uuencode'], ext: ['uu'] },
    { desc: 'vCalendar', mime: ['text/x-vcalendar'], ext: ['vcs'] },
    { desc: 'vCard', mime: ['text/x-vcard'], ext: ['vcf'] },
    { desc: '3GP', mime: ['video/3gpp'], ext: ['3gp'] },
    { desc: '3GP2', mime: ['video/3gpp2'], ext: ['3g2'] },
    { desc: 'H.261', mime: ['video/h261'], ext: ['h261'] },
    { desc: 'H.263', mime: ['video/h263'], ext: ['h263'] },
    { desc: 'H.264', mime: ['video/h264'], ext: ['h264'] },
    { desc: 'JPGVideo', mime: ['video/jpeg'], ext: ['jpgv'] },
    {
      desc: 'JPEG 2000 Compound Image File Format',
      mime: ['video/jpm'],
      ext: ['jpm']
    },
    { desc: 'Motion JPEG 2000', mime: ['video/mj2'], ext: ['mj2'] },
    { desc: 'MPEG-4 Video', mime: ['video/mp4'], ext: ['mp4'] },
    { desc: 'MPEG4', mime: ['application/mp4'], ext: ['mp4'] },
    { desc: 'MPEG Video', mime: ['video/mpeg'], ext: ['mpeg'] },
    { desc: 'Ogg Video', mime: ['video/ogg'], ext: ['ogv'] },
    { desc: 'Quicktime Video', mime: ['video/quicktime'], ext: ['qt'] },
    {
      desc: 'DECE High Definition Video',
      mime: ['video/vnd.dece.hd'],
      ext: ['uvh']
    },
    {
      desc: 'DECE Mobile Video',
      mime: ['video/vnd.dece.mobile'],
      ext: ['uvm']
    },
    { desc: 'DECE PD Video', mime: ['video/vnd.dece.pd'], ext: ['uvp'] },
    { desc: 'DECE SD Video', mime: ['video/vnd.dece.sd'], ext: ['uvs'] },
    { desc: 'DECE Video', mime: ['video/vnd.dece.video'], ext: ['uvv'] },
    {
      desc: 'FAST Search & Transfer ASA',
      mime: ['video/vnd.fvt'],
      ext: ['fvt']
    },
    { desc: 'MPEG Url', mime: ['video/vnd.mpegurl'], ext: ['mxu'] },
    {
      desc: 'Microsoft PlayReady Ecosystem Video',
      mime: ['video/vnd.ms-playready.media.pyv'],
      ext: ['pyv']
    },
    { desc: 'DECE MP4', mime: ['video/vnd.uvvu.mp4'], ext: ['uvu'] },
    { desc: 'Vivo', mime: ['video/vnd.vivo'], ext: ['viv'] },
    {
      desc: 'Open Web Media Project - Video',
      mime: ['video/webm'],
      ext: ['webm']
    },
    { desc: 'Flash Video', mime: ['video/x-f4v'], ext: ['f4v'] },
    { desc: 'FLI/FLC Animation Format', mime: ['video/x-fli'], ext: ['fli'] },
    { desc: 'Flash Video', mime: ['video/x-flv'], ext: ['flv'] },
    { desc: 'M4v', mime: ['video/x-m4v'], ext: ['m4v'] },
    {
      desc: 'Microsoft Advanced Systems Format (ASF)',
      mime: ['video/x-ms-asf'],
      ext: ['asf']
    },
    { desc: 'Microsoft Windows Media', mime: ['video/x-ms-wm'], ext: ['wm'] },
    {
      desc: 'Microsoft Windows Media Video',
      mime: ['video/x-ms-wmv'],
      ext: ['wmv']
    },
    {
      desc: 'Microsoft Windows Media Audio/Video Playlist',
      mime: ['video/x-ms-wmx'],
      ext: ['wmx']
    },
    {
      desc: 'Microsoft Windows Media Video Playlist',
      mime: ['video/x-ms-wvx'],
      ext: ['wvx']
    },
    {
      desc: 'Audio Video Interleave (AVI)',
      mime: ['video/x-msvideo'],
      ext: ['avi']
    },
    { desc: 'SGI Movie', mime: ['video/x-sgi-movie'], ext: ['movie'] },
    { desc: 'CoolTalk', mime: ['x-conference/x-cooltalk'], ext: ['ice'] },
    { desc: 'BAS Partitur Format', mime: ['text/plain-bas'], ext: ['par'] }
  ];
  return {
    whatIs: mime => {
      mime = mime.toLowerCase();
      let match = '';
      fileTypes.forEach(fileType => {
        if (mime.indexOf('/') > -1) {
          if (fileType.mime.indexOf(mime) > -1) {
            match = fileType.ext[0];
          }
        } else {
          if (fileType.ext.indexOf(mime) > -1) {
            match = fileType.ext[0];
          }
        }
      });
      return match;
    }
  };
};

export default Types;
