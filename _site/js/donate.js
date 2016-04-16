var handler = StripeCheckout.configure({
    key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    token: function (token) {
        $("#stripeToken").val(token.id);
        $("#stripeEmail").val(token.email);
        $("#myForm").submit();
    }
});

$('#donatebtn').on('click', function (e) {
    var amount = $("#amount").val() * 100;
    var displayAmount = parseFloat(Math.floor($("#amount").val() * 100) / 100).toFixed(2);
    // Open Checkout with further options
    handler.open({
        name: 'CharityDrops',
        description: 'Donation amount ($' + displayAmount + ')',
        amount: amount
    });
    e.preventDefault();
});

// Close Checkout on page navigation
$(window).on('popstate', function () {
    handler.close();
});
