
// Initialize the map
var map = L.map('map');

// Add a tile layer (the map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Image data
var images = [
    { "src": "images/IMG_3663.jpg", "lat": 42.059647, "lng": -88.036964, "caption": "A photo of IMG_3663" },
    { "src": "images/IMG_3664.jpg", "lat": 42.0598, "lng": -88.037522, "caption": "A photo of IMG_3664" },
    { "src": "images/IMG_3665.jpg", "lat": 42.059789, "lng": -88.037947, "caption": "A photo of IMG_3665" },
    { "src": "images/IMG_3666.jpg", "lat": 42.059775, "lng": -88.037903, "caption": "A photo of IMG_3666" },
    { "src": "images/IMG_3667.jpg", "lat": 42.059775, "lng": -88.037894, "caption": "A photo of IMG_3667" },
    { "src": "images/IMG_3668.jpg", "lat": 42.059853, "lng": -88.038025, "caption": "A photo of IMG_3668" },
    { "src": "images/IMG_3669.jpg", "lat": 42.059842, "lng": -88.038033, "caption": "A photo of IMG_3669" },
    { "src": "images/IMG_3670.jpg", "lat": 42.059814, "lng": -88.038217, "caption": "A photo of IMG_3670" },
    { "src": "images/IMG_3672.jpg", "lat": 42.059814, "lng": -88.038039, "caption": "A photo of IMG_3672" },
    { "src": "images/IMG_3673.jpg", "lat": 42.059811, "lng": -88.038147, "caption": "A photo of IMG_3673" },
    { "src": "images/IMG_3674.jpg", "lat": 42.059806, "lng": -88.038278, "caption": "A photo of IMG_3674" },
    { "src": "images/IMG_3675.jpg", "lat": 42.060047, "lng": -88.038461, "caption": "A photo of IMG_3675" },
    { "src": "images/IMG_3677.jpg", "lat": 42.060294, "lng": -88.037933, "caption": "A photo of IMG_3677" },
    { "src": "images/IMG_3678.jpg", "lat": 42.060281, "lng": -88.037942, "caption": "A photo of IMG_3678" },
    { "src": "images/IMG_3679.jpg", "lat": 42.060089, "lng": -88.037947, "caption": "A photo of IMG_3679" },
    { "src": "images/IMG_3680.jpg", "lat": 42.060031, "lng": -88.037903, "caption": "A photo of IMG_3680" },
    { "src": "images/IMG_3681.jpg", "lat": 42.06, "lng": -88.037858, "caption": "A photo of IMG_3681" },
    { "src": "images/IMG_3682.jpg", "lat": 42.059944, "lng": -88.037697, "caption": "A photo of IMG_3682" },
    { "src": "images/IMG_3683.jpg", "lat": 42.059953, "lng": -88.037392, "caption": "A photo of IMG_3683" },
    { "src": "images/IMG_3684.jpg", "lat": 42.060014, "lng": -88.037231, "caption": "A photo of IMG_3684" },
    { "src": "images/IMG_3685.jpg", "lat": 42.060172, "lng": -88.037308, "caption": "A photo of IMG_3685" },
    { "src": "images/IMG_3686.jpg", "lat": 42.060181, "lng": -88.037528, "caption": "A photo of IMG_3686" },
    { "src": "images/IMG_3687.jpg", "lat": 42.060239, "lng": -88.037544, "caption": "A photo of IMG_3687" },
    { "src": "images/IMG_3688.jpg", "lat": 42.060344, "lng": -88.037558, "caption": "A photo of IMG_3688" },
    { "src": "images/IMG_3689.jpg", "lat": 42.060517, "lng": -88.037378, "caption": "A photo of IMG_3689" },
    { "src": "images/IMG_3690.jpg", "lat": 42.060514, "lng": -88.037378, "caption": "A photo of IMG_3690" },
    { "src": "images/IMG_3691.jpg", "lat": 42.060572, "lng": -88.037392, "caption": "A photo of IMG_3691" },
    { "src": "images/IMG_3692.jpg", "lat": 42.060661, "lng": -88.037339, "caption": "A photo of IMG_3692" },
    { "src": "images/IMG_3693.jpg", "lat": 42.060739, "lng": -88.037369, "caption": "A photo of IMG_3693" },
    { "src": "images/IMG_3694.jpg", "lat": 42.060858, "lng": -88.037444, "caption": "A photo of IMG_3694" },
    { "src": "images/IMG_3695.jpg", "lat": 42.060889, "lng": -88.037536, "caption": "A photo of IMG_3695" },
    { "src": "images/IMG_3696.jpg", "lat": 42.060889, "lng": -88.037758, "caption": "A photo of IMG_3696" },
    { "src": "images/IMG_3697.jpg", "lat": 42.060617, "lng": -88.037889, "caption": "A photo of IMG_3697" },
    { "src": "images/IMG_3706.jpg", "lat": 42.060619, "lng": -88.036689, "caption": "A photo of IMG_3706" },
    { "src": "images/IMG_3707.jpg", "lat": 42.060508, "lng": -88.036714, "caption": "A photo of IMG_3707" },
    { "src": "images/IMG_3716.jpg", "lat": 42.061344, "lng": -88.037322, "caption": "A photo of IMG_3716" },
    { "src": "images/IMG_3717.jpg", "lat": 42.061294, "lng": -88.037194, "caption": "A photo of IMG_3717" },
    { "src": "images/IMG_3718.jpg", "lat": 42.061114, "lng": -88.037194, "caption": "A photo of IMG_3718" },
    { "src": "images/IMG_3719.jpg", "lat": 42.061042, "lng": -88.037178, "caption": "A photo of IMG_3719" },
    { "src": "images/IMG_3720.jpg", "lat": 42.061025, "lng": -88.037208, "caption": "A photo of IMG_3720" },
    { "src": "images/IMG_3721.jpg", "lat": 42.060842, "lng": -88.036164, "caption": "A photo of IMG_3721" },
    { "src": "images/IMG_3722.jpg", "lat": 42.060817, "lng": -88.036186, "caption": "A photo of IMG_3722" },
    { "src": "images/IMG_3723.jpg", "lat": 42.060561, "lng": -88.036111, "caption": "A photo of IMG_3723" },
    { "src": "images/IMG_3724.jpg", "lat": 42.060494, "lng": -88.036156, "caption": "A photo of IMG_3724" },
    { "src": "images/IMG_3725.jpg", "lat": 42.060458, "lng": -88.036156, "caption": "A photo of IMG_3725" },
    { "src": "images/IMG_3726.jpg", "lat": 42.060408, "lng": -88.036142, "caption": "A photo of IMG_3726" },
    { "src": "images/IMG_3727.jpg", "lat": 42.060622, "lng": -88.036475, "caption": "A photo of IMG_3727" },
    { "src": "images/IMG_3728.jpg", "lat": 42.060889, "lng": -88.036461, "caption": "A photo of IMG_3728" },
    { "src": "images/IMG_3729.jpg", "lat": 42.060928, "lng": -88.035981, "caption": "A photo of IMG_3729" },
    { "src": "images/IMG_3730.jpg", "lat": 42.060925, "lng": -88.035964, "caption": "A photo of IMG_3730" },
    { "src": "images/IMG_3731.jpg", "lat": 42.061103, "lng": -88.035889, "caption": "A photo of IMG_3731" },
    { "src": "images/IMG_3732.jpg", "lat": 42.061372, "lng": -88.036094, "caption": "A photo of IMG_3732" },
    { "src": "images/IMG_3733.jpg", "lat": 42.061236, "lng": -88.036292, "caption": "A photo of IMG_3733" },
    { "src": "images/IMG_3734.jpg", "lat": 42.061019, "lng": -88.036622, "caption": "A photo of IMG_3734" },
    { "src": "images/IMG_3735.jpg", "lat": 42.060925, "lng": -88.036575, "caption": "A photo of IMG_3735" },
    { "src": "images/IMG_3736.jpg", "lat": 42.060875, "lng": -88.036111, "caption": "A photo of IMG_3736" },
    { "src": "images/IMG_3737.jpg", "lat": 42.061025, "lng": -88.035872, "caption": "A photo of IMG_3737" },
    { "src": "images/IMG_3738.jpg", "lat": 42.061283, "lng": -88.035797, "caption": "A photo of IMG_3738" },
    { "src": "images/IMG_3739.jpg", "lat": 42.061275, "lng": -88.035797, "caption": "A photo of IMG_3739" },
    { "src": "images/IMG_3740.jpg", "lat": 42.061272, "lng": -88.035644, "caption": "A photo of IMG_3740" },
    { "src": "images/IMG_3741.jpg", "lat": 42.061069, "lng": -88.035569, "caption": "A photo of IMG_3741" },
    { "src": "images/IMG_3742.jpg", "lat": 42.061069, "lng": -88.035575, "caption": "A photo of IMG_3742" },
    { "src": "images/IMG_3743.jpg", "lat": 42.060947, "lng": -88.035356, "caption": "A photo of IMG_3743" },
    { "src": "images/IMG_3744.jpg", "lat": 42.060936, "lng": -88.035347, "caption": "A photo of IMG_3744" },
    { "src": "images/IMG_3745.jpg", "lat": 42.060889, "lng": -88.035347, "caption": "A photo of IMG_3745" },
    { "src": "images/IMG_3746.jpg", "lat": 42.060833, "lng": -88.0353, "caption": "A photo of IMG_3746" },
    { "src": "images/IMG_3747.jpg", "lat": 42.060842, "lng": -88.035308, "caption": "A photo of IMG_3747" },
    { "src": "images/IMG_3748.jpg", "lat": 42.060753, "lng": -88.035431, "caption": "A photo of IMG_3748" },
    { "src": "images/IMG_3749.jpg", "lat": 42.060753, "lng": -88.035758, "caption": "A photo of IMG_3749" },
    { "src": "images/IMG_3750.jpg", "lat": 42.06015, "lng": -88.035972, "caption": "A photo of IMG_3750" },
    { "src": "images/IMG_3751.jpg", "lat": 42.059978, "lng": -88.035858, "caption": "A photo of IMG_3751" },
    { "src": "images/IMG_3752.jpg", "lat": 42.059986, "lng": -88.03585, "caption": "A photo of IMG_3752" },
    { "src": "images/IMG_3753.jpg", "lat": 42.059978, "lng": -88.035781, "caption": "A photo of IMG_3753" },
    { "src": "images/IMG_3754.jpg", "lat": 42.059989, "lng": -88.035583, "caption": "A photo of IMG_3754" },
    { "src": "images/IMG_3755.jpg", "lat": 42.059989, "lng": -88.035583, "caption": "A photo of IMG_3755" },
    { "src": "images/IMG_3757.jpg", "lat": 42.059975, "lng": -88.035492, "caption": "A photo of IMG_3757" },
    { "src": "images/IMG_3758.jpg", "lat": 42.059975, "lng": -88.035483, "caption": "A photo of IMG_3758" },
    { "src": "images/IMG_3759.jpg", "lat": 42.059958, "lng": -88.035447, "caption": "A photo of IMG_3759" },
    { "src": "images/IMG_3760.jpg", "lat": 42.059903, "lng": -88.035286, "caption": "A photo of IMG_3760" },
    { "src": "images/IMG_3761.jpg", "lat": 42.059744, "lng": -88.035339, "caption": "A photo of IMG_3761" },
    { "src": "images/IMG_3762.jpg", "lat": 42.059722, "lng": -88.0354, "caption": "A photo of IMG_3762" },
    { "src": "images/IMG_3763.jpg", "lat": 42.059728, "lng": -88.035461, "caption": "A photo of IMG_3763" },
    { "src": "images/IMG_3764.jpg", "lat": 42.059514, "lng": -88.035606, "caption": "A photo of IMG_3764" },
    { "src": "images/IMG_3765.jpg", "lat": 42.059472, "lng": -88.035622, "caption": "A photo of IMG_3765" },
    { "src": "images/IMG_3766.jpg", "lat": 42.059467, "lng": -88.035775, "caption": "A photo of IMG_3766" },
    { "src": "images/IMG_3767.jpg", "lat": 42.059519, "lng": -88.035903, "caption": "A photo of IMG_3767" },
    { "src": "images/IMG_3768.jpg", "lat": 42.059842, "lng": -88.036033, "caption": "A photo of IMG_3768" },
    { "src": "images/IMG_3769.jpg", "lat": 42.059744, "lng": -88.035958, "caption": "A photo of IMG_3769" },
    { "src": "images/IMG_3770.jpg", "lat": 42.059667, "lng": -88.03595, "caption": "A photo of IMG_3770" },
    { "src": "images/IMG_3771.jpg", "lat": 42.059575, "lng": -88.035919, "caption": "A photo of IMG_3771" },
    { "src": "images/IMG_3772.jpg", "lat": 42.059486, "lng": -88.035958, "caption": "A photo of IMG_3772" },
    { "src": "images/IMG_3773.jpg", "lat": 42.059436, "lng": -88.036042, "caption": "A photo of IMG_3773" },
    { "src": "images/IMG_3774.jpg", "lat": 42.059597, "lng": -88.036278, "caption": "A photo of IMG_3774" },
    { "src": "images/IMG_3775.jpg", "lat": 42.059617, "lng": -88.036322, "caption": "A photo of IMG_3775" },
    { "src": "images/IMG_3776.jpg", "lat": 42.059617, "lng": -88.036331, "caption": "A photo of IMG_3776" },
    { "src": "images/IMG_3777.jpg", "lat": 42.059628, "lng": -88.036583, "caption": "A photo of IMG_3777" },
    { "src": "images/IMG_3778.jpg", "lat": 42.059678, "lng": -88.036636, "caption": "A photo of IMG_3778" },
    { "src": "images/IMG_3779.jpg", "lat": 42.059692, "lng": -88.036614, "caption": "A photo of IMG_3779" },
    { "src": "images/IMG_3780.jpg", "lat": 42.05975, "lng": -88.036628, "caption": "A photo of IMG_3780" },
    { "src": "images/IMG_3781.jpg", "lat": 42.059853, "lng": -88.036553, "caption": "A photo of IMG_3781" },
    { "src": "images/IMG_3782.jpg", "lat": 42.059864, "lng": -88.036553, "caption": "A photo of IMG_3782" },
    { "src": "images/IMG_3783.jpg", "lat": 42.059911, "lng": -88.036408, "caption": "A photo of IMG_3783" },
    { "src": "images/IMG_3784.jpg", "lat": 42.059914, "lng": -88.036347, "caption": "A photo of IMG_3784" },
    { "src": "images/IMG_3785.jpg", "lat": 42.059894, "lng": -88.036178, "caption": "A photo of IMG_3785" },
    { "src": "images/IMG_3786.jpg", "lat": 42.059911, "lng": -88.036178, "caption": "A photo of IMG_3786" },
    { "src": "images/IMG_3787.jpg", "lat": 42.059914, "lng": -88.036186, "caption": "A photo of IMG_3787" },
    { "src": "images/IMG_3788.jpg", "lat": 42.059917, "lng": -88.036172, "caption": "A photo of IMG_3788" },
    { "src": "images/IMG_3789.jpg", "lat": 42.059906, "lng": -88.036278, "caption": "A photo of IMG_3789" },
    { "src": "images/IMG_3790.jpg", "lat": 42.059922, "lng": -88.036331, "caption": "A photo of IMG_3790" },
    { "src": "images/IMG_3791.jpg", "lat": 42.059842, "lng": -88.036514, "caption": "A photo of IMG_3791" },
    { "src": "images/IMG_3792.jpg", "lat": 42.060047, "lng": -88.036561, "caption": "A photo of IMG_3792" },
    { "src": "images/IMG_3793.jpg", "lat": 42.060089, "lng": -88.036531, "caption": "A photo of IMG_3793" },
    { "src": "images/IMG_3794.jpg", "lat": 42.060161, "lng": -88.036483, "caption": "A photo of IMG_3794" },
    { "src": "images/IMG_3795.jpg", "lat": 42.060161, "lng": -88.036483, "caption": "A photo of IMG_3795" },
    { "src": "images/IMG_3796.jpg", "lat": 42.060375, "lng": -88.036361, "caption": "A photo of IMG_3796" },
    { "src": "images/IMG_3797.jpg", "lat": 42.060372, "lng": -88.036361, "caption": "A photo of IMG_3797" },
    { "src": "images/IMG_3798.jpg", "lat": 42.060378, "lng": -88.036286, "caption": "A photo of IMG_3798" },
    { "src": "images/IMG_3799.jpg", "lat": 42.060378, "lng": -88.036256, "caption": "A photo of IMG_3799" },
    { "src": "images/IMG_3800.jpg", "lat": 42.060303, "lng": -88.036147, "caption": "A photo of IMG_3800" },
    { "src": "images/IMG_3801.jpg", "lat": 42.060222, "lng": -88.036133, "caption": "A photo of IMG_3801" },
    { "src": "images/IMG_3802.jpg", "lat": 42.060142, "lng": -88.036133, "caption": "A photo of IMG_3802" },
    { "src": "images/IMG_3803.jpg", "lat": 42.060128, "lng": -88.036172, "caption": "A photo of IMG_3803" },
    { "src": "images/IMG_3804.jpg", "lat": 42.060036, "lng": -88.036156, "caption": "A photo of IMG_3804" },
    { "src": "images/IMG_3805.jpg", "lat": 42.060031, "lng": -88.036147, "caption": "A photo of IMG_3805" },
    { "src": "images/IMG_3806.jpg", "lat": 42.059964, "lng": -88.036142, "caption": "A photo of IMG_3806" },
    { "src": "images/IMG_3807.jpg", "lat": 42.059947, "lng": -88.036147, "caption": "A photo of IMG_3807" },
    { "src": "images/IMG_3808.jpg", "lat": 42.059917, "lng": -88.036072, "caption": "A photo of IMG_3808" },
    { "src": "images/IMG_3809.jpg", "lat": 42.059867, "lng": -88.036003, "caption": "A photo of IMG_3809" },
    { "src": "images/IMG_3810.jpg", "lat": 42.059431, "lng": -88.036842, "caption": "A photo of IMG_3810" },
    { "src": "images/IMG_3811.jpg", "lat": 42.059617, "lng": -88.036806, "caption": "A photo of IMG_3811" },
    { "src": "images/IMG_3812.jpg", "lat": 42.05975, "lng": -88.03775, "caption": "A photo of IMG_3812" },
    { "src": "images/IMG_3813.jpg", "lat": 42.060806, "lng": -88.037278, "caption": "A photo of IMG_3813" },
    { "src": "images/IMG_3814.jpg", "lat": 42.061294, "lng": -88.037103, "caption": "A photo of IMG_3814" },
    { "src": "images/IMG_3815.jpg", "lat": 42.061306, "lng": -88.037094, "caption": "A photo of IMG_3815" },
    { "src": "images/IMG_3816.jpg", "lat": 42.061292, "lng": -88.036744, "caption": "A photo of IMG_3816" },
    { "src": "images/IMG_3817.jpg", "lat": 42.061336, "lng": -88.036278, "caption": "A photo of IMG_3817" },
    { "src": "images/IMG_3818.jpg", "lat": 42.061408, "lng": -88.035981, "caption": "A photo of IMG_3818" },
    { "src": "images/IMG_3819.jpg", "lat": 42.060817, "lng": -88.035447, "caption": "A photo of IMG_3819" },
    { "src": "images/IMG_3820.jpg", "lat": 42.060786, "lng": -88.035422, "caption": "A photo of IMG_3820" },
    { "src": "images/IMG_3821.jpg", "lat": 42.059883, "lng": -88.036111, "caption": "A photo of IMG_3821" },
    { "src": "images/IMG_3822.jpg", "lat": 42.059978, "lng": -88.035903, "caption": "A photo of IMG_3822" }
];

// Create a group for our markers
var markers = [];

// Add markers to the map
for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var marker = L.marker([image.lat, image.lng]);
    // Use a class for styling the image instead of inline width
    marker.bindPopup('<a href="' + image.src + '" data-lightbox="fieldpointe-images" data-title="' + image.caption + '"><img src="' + image.src + '" class="popup-image"></a><br>' + image.caption);
    markers.push(marker);
}

// Add all markers to a feature group
var group = new L.featureGroup(markers).addTo(map);

// Set the map view to fit all the markers
if (markers.length > 0) {
    map.fitBounds(group.getBounds().pad(0.1)); // Add some padding
} else {
    // Fallback if there are no images
    map.setView([42.0334, -88.0834], 15); // Default to Schaumburg
}
